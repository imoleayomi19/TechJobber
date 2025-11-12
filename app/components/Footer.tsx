export default function Footer() {
  return (
    <footer className="border-t mt-16 py-8 text-center text-gray-500 text-sm">
      <p>© {new Date().getFullYear()} TechJobber. Made for developers, by developers.</p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:text-indigo-600">Privacy</a>
        <a href="#" className="hover:text-indigo-600">Terms</a>
        <a href="#" className="hover:text-indigo-600">Contact</a>
      </div>
    </footer>
  );
}