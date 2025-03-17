import PositionButton from "./PositionButton";
import SearchInput from "./SearchInput";
import ToggleTheme from "../../ui/ToggleTheme";

const SearchCity : React.FC = () => {

    return (
      <div className="flex flex-wrap items-center justify-between pt-10">
        <ToggleTheme />
        <SearchInput />
        <PositionButton />
      </div>
    );
}

export default SearchCity