import { withClasses } from "../../utils/with-classes";
import classes from "./header.module.scss";
import { MyHeader as MH } from "./header";

export const MyHeader = withClasses(classes, MH);
