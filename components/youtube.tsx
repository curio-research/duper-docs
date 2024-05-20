export default function YouTube({ id }: { id: string }) {
  return (
    <div>
      <iframe
        className="aspect-video w-full"
        width="100%"
        height="500"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}
