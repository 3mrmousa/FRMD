export default function ProgressBar({
  progress,
  color,
}: {
  progress: number;
  color: string;
}) {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700`}>
      <div
        className={`bg-${color}-600 h-2.5 rounded-full`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
