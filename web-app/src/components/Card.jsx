import { CardContent } from "./CardContent"


export const Card = ({starless}) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
      <img
          src="/placeholder.svg"
          alt="Movie Poster"
          className="rounded-t-lg object-cover w-full h-60"
          width="400"
          height="300"
          style={{ aspectRatio: '400/300', objectFit: 'cover' }}
        />
      <CardContent starless={starless} />
    </div>
  )
}
