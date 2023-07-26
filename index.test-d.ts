import { expectType } from "tsd-check";
import chcp from ".";
//check other syntax too
import { getConsoleCodePage, setConsoleCodePage } from ".";

expectType<number>(chcp.getConsoleCodePage());
expectType<number>(chcp.setConsoleCodePage(850));
expectType<number>(getConsoleCodePage());
expectType<number>(setConsoleCodePage(850));
