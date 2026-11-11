export const metadata = {
  title: "Focus | Ajith Venugopal",
  description: "A minimalist focus timer with single and split session modes.",
};

export default function FocusPage() {
  return (
    <iframe
      src="/focus-widget.html"
      title="Focus timer"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
        zIndex: 9999,
      }}
    />
  );
}
