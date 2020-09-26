import * as Jitsi from "react-jitsi";

declare module "react-jitsi/dist/types" {
    export interface ConfigOptions {
        prejoinPageEnabled: boolean;
    }
}