import { Hit } from "./Hit"

export class RecipeResponse {
    count: number
    from: number
    hits: [Hit]
    more: boolean
    q: string
    to: number
}