

export default function SearchBar() {
    return (
      <div className="w-250 flex items-center justify-center shrink">
        <input
          type="text"
          placeholder="Search"
          className="w-4/5 border border-gray-800 rounded-xl p-2"
        />
      </div>
    );
}