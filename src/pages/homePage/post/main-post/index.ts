import { withClasses } from "../../../../utils/with-classes";
import classes from "./post.module.scss";
import { Post as P } from "./post";
export const Post = withClasses(classes, P);

export * from "../like-button";
