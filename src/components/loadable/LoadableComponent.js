import Loadable from "react-loadable";
import LoadingComponent from "./LoadingComponent";

export default function LoadableComponent( opts ) {
    return Loadable( Object.assign( {loading: LoadingComponent}, opts ) );
}