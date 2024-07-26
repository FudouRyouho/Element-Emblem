import { useAppDispatch, useAppSelector } from "../../state/store";
import { ToggleSection } from "../actions/Layout.actions";

export const useSectionSwitcher = () => {
  const dispatch = useAppDispatch();
  const currentSection = useAppSelector((state) => state.layout.MainMenuSection);

  const switchSection = (section: string) => {
    dispatch(ToggleSection(section));
  };

  return { currentSection, switchSection };
};