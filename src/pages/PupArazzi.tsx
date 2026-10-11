import { useState, type FormEvent, type ChangeEvent } from 'react'
import { business } from '@/data/business'
import { pupArazziPosts } from '@/data/pupArazziPosts'
import { Lightbox } from '@/components/Lightbox'
import { whatsappLink } from '@/lib/whatsapp'

const petTypes = [
  { value: 'Dog', icon: '🐶' },
  { value: 'Cat', icon: '🐱' },
  { value: 'Bird', icon: '🐦' },
  { value: 'Fish', icon: '🐠' },
  { value: 'Snake', icon: '🐍' },
  { value: 'Other pet', icon: '🐾' },
]

const maxPhotoBytes = 8 * 1024 * 1024
const allowedPhotoTypes = ['image/jpeg', 'image/png', 'image/webp']

export default function PupArazzi() {
  const [active, setActive] = useState<number | null>(null)
  const [petName, setPetName] = useState('')
  const [petType, setPetType] = useState('Dog')
  const [story, setStory] = useState('')
  const [photo, setPhoto] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [photoError, setPhotoError] = useState('')
  const [permission, setPermission] = useState(false)
  const [whatsAppHref, setWhatsAppHref] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const open = (i: number) => setActive(i)
  const close = () => setActive(null)
  const nav = (dir: number) =>
    setActive((cur) =>
      cur === null || pupArazziPosts.length === 0 ? cur : (cur + dir + pupArazziPosts.length) % pupArazziPosts.length,
    )

  const choosePhoto = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null
    setPhotoError('')
    setSubmitted(false)
    setWhatsAppHref('')
    if (!file) {
      setPhoto(null)
      setPhotoPreview(null)
      return
    }
    if (!allowedPhotoTypes.includes(file.type)) {
      setPhoto(null)
      setPhotoPreview(null)
      setPhotoError('Please choose a JPG, PNG or WebP photo.')
      event.target.value = ''
      return
    }
    if (file.size > maxPhotoBytes) {
      setPhoto(null)
      setPhotoPreview(null)
      setPhotoError('Please choose a photo smaller than 8 MB.')
      event.target.value = ''
      return
    }

    setPhoto(file)
    const reader = new FileReader()
    reader.onload = () => setPhotoPreview(typeof reader.result === 'string' ? reader.result : null)
    reader.readAsDataURL(file)
  }

  const submitStory = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!photo || !permission) return

    const message = [
      "Hi The Pet's Butler! I'd like to submit a Pup-arazzi story for review.",
      `Pet's name: ${petName.trim()}`,
      `Pet type: ${petType}`,
      `Story: ${story.trim()}`,
      `Photo selected: ${photo.name} (I'll attach it in this WhatsApp chat.)`,
      'Permission: I am the owner or have the owner’s permission to share this photo. I agree that, if approved, The Pet’s Butler may publish this photo and story on the public Pup-arazzi page. Please keep my name and contact details private.',
    ].join('\n')

    const href = whatsappLink(message)
    setWhatsAppHref(href)
    setSubmitted(true)
    const newWindow = window.open(href, '_blank')
    if (newWindow) newWindow.opener = null
  }

  return (
    <>
      <section className="page-head pup-head">
        <div className="container">
          <div className="eyebrow">Centurion’s pet community · Everyone’s welcome</div>
          <h1>Pup-arazzi</h1>
          <p>A pet-photo community for Centurion, separate from The Pet’s Butler client gallery. Every local pet owner is welcome—no booking or client account needed. Share a photo and a short story about your favourite friend.</p>
        </div>
      </section>

      <section className="section pup-submit-section">
        <div className="container" id="submit-story">
          <div className="pup-submit-card">
            <div className="pup-submit-intro">
              <span className="pup-submit-icon" aria-hidden="true">📸</span>
              <div>
                <div className="eyebrow">Your pet’s moment</div>
                <h2>Give your pet their Pup-arazzi moment</h2>
                <p>Choose a photo, tell us a little story, and send it to us on WhatsApp. We review every post and only add it to the public wall with your permission.</p>
                <ol className="pup-submit-steps">
                  <li><span>1</span> Add your pet’s details and photo</li>
                  <li><span>2</span> Continue to WhatsApp and attach the photo there</li>
                  <li><span>3</span> We review it before it appears on Pup-arazzi</li>
                </ol>
              </div>
            </div>

            <form className="pup-submit-form" onSubmit={submitStory}>
              <div className="field--row">
                <div className="field">
                  <label htmlFor="pup-pet-name">Pet’s name</label>
                  <input id="pup-pet-name" name="petName" value={petName} onChange={(event) => setPetName(event.target.value)} maxLength={32} required />
                </div>
                <div className="field">
                  <label htmlFor="pup-pet-type">Pet type</label>
                  <select id="pup-pet-type" name="petType" value={petType} onChange={(event) => setPetType(event.target.value)}>
                    {petTypes.map((type) => <option key={type.value} value={type.value}>{type.icon} {type.value}</option>)}
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="pup-photo">Choose a photo</label>
                <input id="pup-photo" name="photo" type="file" accept="image/jpeg,image/png,image/webp" onChange={choosePhoto} required />
                <small className="form__hint">JPG, PNG or WebP · up to 8 MB. Preview stays in your browser. For privacy, share a pet-only photo and leave out home addresses or children’s details.</small>
                {photoError && <span className="pup-form-error" role="alert">{photoError}</span>}
              </div>

              {photoPreview && photo && (
                <div className="pup-photo-preview">
                  <img src={photoPreview} alt={`Preview of ${petName || 'your pet'}`} />
                  <span>{photo.name}</span>
                </div>
              )}

              <div className="field">
                <label htmlFor="pup-story">A short story about {petName.trim() || 'your pet'}</label>
                <textarea id="pup-story" name="story" value={story} onChange={(event) => { setStory(event.target.value); setSubmitted(false) }} maxLength={240} placeholder="What makes your pet unforgettable?" required />
                <small className="form__hint">{story.length}/240 characters</small>
              </div>

              <label className="pup-consent">
                <input type="checkbox" checked={permission} onChange={(event) => { setPermission(event.target.checked); setSubmitted(false) }} required />
                <span>I’m the pet owner or have the owner’s permission to share this photo. If the post is approved, I give permission for the photo, pet’s name and story to appear on the public Pup-arazzi page. My name and contact details must stay private.</span>
              </label>

              <p className="form__hint">When WhatsApp opens, attach the selected photo to the chat before sending your story. We’ll check your submission before publishing it.</p>
              <button className="btn btn--primary" type="submit">Send your story for review on WhatsApp →</button>
              {submitted && whatsAppHref && (
                <div className="form__success" role="status" aria-live="polite">
                  <strong>Almost there!</strong> Attach your photo in WhatsApp and send the prepared message. We’ll review it before it appears here.
                  <a className="pup-whatsapp-fallback" href={whatsAppHref} target="_blank" rel="noreferrer">Open WhatsApp again</a>
                </div>
              )}
              <small className="pup-private-note">Your name, WhatsApp number and home address won’t be shown on the public post. Pup-arazzi is moderated; posts aren’t published automatically.</small>
            </form>
          </div>
        </div>
      </section>

      <section className="section pup-wall-section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="section-head pup-wall-heading">
            <div>
              <div className="eyebrow">The community wall</div>
              <h2>Centurion’s happy tails</h2>
              <p>Pet photos and stories shared by Centurion’s pet community. Every post is checked before it appears here.</p>
            </div>
            <span className="pup-wall-count">🐾 {pupArazziPosts.length} community posts</span>
          </div>
          {pupArazziPosts.length > 0 ? (
            <div className="pup-wall">
              {pupArazziPosts.map((post, i) => (
              <article className="pup-post" key={post.id}>
                <div className="pup-post__header">
                  <span className="pup-post__avatar" aria-hidden="true">{petTypes.find((type) => type.value === post.petType)?.icon ?? '🐾'}</span>
                  <span><strong>{post.petName}</strong><small>Centurion pet community</small></span>
                  <span className="pup-post__menu" aria-hidden="true">•••</span>
                </div>
                <button
                  className="gallery-item pup-post__photo"
                  onClick={() => open(i)}
                  aria-label={`Open photo of ${post.petName}`}
                >
                  <img src={post.image} alt={`${post.petName}, a ${post.petType.toLowerCase()} from Centurion`} loading="lazy" />
                </button>
                <div className="pup-post__caption">
                  <span className="pup-post__paw" aria-hidden="true">🐾</span>
                  <p><strong>{post.petName}</strong> · {post.story}</p>
                </div>
              </article>
              ))}
            </div>
          ) : (
            <div className="pup-wall-empty">
              <span aria-hidden="true">🐾</span>
              <h3>The wall is ready for its first star</h3>
              <p>Be the first Centurion pet owner to share a photo and a little story. You don’t need to be a Pet’s Butler client to join in.</p>
              <a className="btn btn--primary" href="#submit-story">Share your pet’s story →</a>
            </div>
          )}
        </div>
      </section>

      <section className="pup-account-note">
        <div className="container">
          <span aria-hidden="true">💌</span>
          <p><strong>Starting simply, with care.</strong> Pup-arazzi doesn’t need an account. Send us your post on WhatsApp; we’ll review it and add approved stories by hand. If the community grows, member profiles can come later.</p>
          <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer">Ask us a question →</a>
        </div>
      </section>

      {active !== null && pupArazziPosts[active] && (
        <Lightbox
          index={active}
          total={pupArazziPosts.length}
          caption={`${pupArazziPosts[active].petName} · ${pupArazziPosts[active].story}`}
          src={pupArazziPosts[active].image}
          onClose={close}
          onNav={nav}
        />
      )}
    </>
  )
}
