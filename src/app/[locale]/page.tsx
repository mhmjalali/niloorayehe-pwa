const PLACEHOLDER_BOXES = [1, 2, 3, 4, 5];

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      {PLACEHOLDER_BOXES.map((box) => (
        <div
          key={box}
          className="flex h-64 items-center justify-center border border-primary/30 text-primary"
        >
          باکس {box}
        </div>
      ))}
    </div>
  );
}
