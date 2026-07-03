import { explanations } from '@/data/explanations'

export function getExplanation(episodeId) {
  return explanations[episodeId] ?? null
}
