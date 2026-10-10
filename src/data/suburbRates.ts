export interface SuburbRate {
  id: string
  name: string
  rate: number
  zone: string
}

// Travel-inclusive mobile-service rates, estimated from Rooihuiskraal.
export const suburbRates: SuburbRate[] = [
  { id: 'rooihuiskraal', name: 'Rooihuiskraal', rate: 100, zone: 'Nearby · R100' },
  { id: 'the-reeds', name: 'The Reeds', rate: 100, zone: 'Nearby · R100' },
  { id: 'wierda-park', name: 'Wierda Park', rate: 100, zone: 'Nearby · R100' },
  { id: 'amberfield', name: 'Amberfield', rate: 120, zone: 'Local · R120' },
  { id: 'thatchfield', name: 'Thatchfield', rate: 120, zone: 'Local · R120' },
  { id: 'rooihuiskraal-north', name: 'Rooihuiskraal North', rate: 120, zone: 'Local · R120' },
  { id: 'eldoraigne', name: 'Eldoraigne', rate: 125, zone: 'Local · R125' },
  { id: 'centurion-central', name: 'Centurion Central', rate: 150, zone: 'Extended Centurion · R150' },
  { id: 'clubview', name: 'Clubview', rate: 150, zone: 'Extended Centurion · R150' },
  { id: 'highveld', name: 'Highveld', rate: 150, zone: 'Extended Centurion · R150' },
  { id: 'irene', name: 'Irene', rate: 150, zone: 'Extended Centurion · R150' },
  { id: 'midstream', name: 'Midstream Estate', rate: 150, zone: 'Extended Centurion · R150' },
  { id: 'other-centurion', name: 'Other Centurion suburb (confirm by phone)', rate: 150, zone: 'Extended Centurion · up to R150' },
]
