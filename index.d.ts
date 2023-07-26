// Type definitions for chcp 1.1.1
// Project: https://github.com/ibmruntimes/chcp
// Definitions by: Andreas Böhm <https://github.com/matherm-aboehm>

/** **********************************************************************
 * Copyright 2018 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ************************************************************************/

export as namespace chcp;

export function getConsoleCodePage(): number;
export function setConsoleCodePage(cp: number): number;

declare var _getType: typeof getConsoleCodePage;
declare var _setType: typeof setConsoleCodePage;
declare namespace chcp {
  //use 'a as b' syntax here to resolve error TS2303 for TypeScript older than 3.7
  export { _getType as getConsoleCodePage, _setType as setConsoleCodePage }
}

export default chcp;
