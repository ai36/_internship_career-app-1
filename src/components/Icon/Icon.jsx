import {
  ArrowToRightSvg,
  FilterSvg,
  BriefcaseSvg,
  CalendarSvg,
  HideSvg,
  LocationSvg,
  LogoSvg,
  ExperienceSvg,
  EyeSolidSvg,
  GraduationSvg,
  JobSvg,
  OtherSvg,
  StackSvg,
  TimeSvg,
  CashSvg,
  CrossSvg,
} from './Svg';

const svgComponents = {
  arrowToRight: ArrowToRightSvg,
  filter: FilterSvg,
  briefcase: BriefcaseSvg,
  calendar: CalendarSvg,
  hide: HideSvg,
  eyeSolid: EyeSolidSvg,
  location: LocationSvg,
  experience: ExperienceSvg,
  logo: LogoSvg,
  graduation: GraduationSvg,
  job: JobSvg,
  other: OtherSvg,
  stack: StackSvg,
  time: TimeSvg,
  cash: CashSvg,
  cross: CrossSvg,
};

export const Icon = ({ name, ...props }) => {
  const SvgComponent = svgComponents[name] || (() => <svg />);
  return <SvgComponent {...props} />;
};
