import { expectType } from "tsd-check";
import chcp from ".";

expectType<number>(chcp.getConsoleCodePage());
expectType<number>(chcp.setConsoleCodePage(850));
