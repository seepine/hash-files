require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 105:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Outputs = exports.Inputs = void 0;
/* eslint-disable no-shadow */
var Inputs;
(function (Inputs) {
    Inputs["Workdir"] = "workdir";
    Inputs["Patterns"] = "patterns";
    Inputs["Gitignore"] = "gitignore";
    Inputs["IgnoreFiles"] = "ignoreFiles"; // Input for cache, save action
})(Inputs = exports.Inputs || (exports.Inputs = {}));
var Outputs;
(function (Outputs) {
    Outputs["Hash"] = "hash";
    Outputs["MatchedFiles"] = "matched-files"; // Output from restore action
})(Outputs = exports.Outputs || (exports.Outputs = {}));


/***/ }),

/***/ 743:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.readFile = exports.getFiles = void 0;
const globby_1 = __nccwpck_require__(382);
const fs = __importStar(__nccwpck_require__(147));
function getFiles(workdir, patterns, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((RES) => __awaiter(this, void 0, void 0, function* () {
            const paths = yield (0, globby_1.globby)(patterns.map(item => {
                return workdir + item;
            }), options);
            RES(paths);
        }));
    });
}
exports.getFiles = getFiles;
function readFile(path) {
    return __awaiter(this, void 0, void 0, function* () {
        return fs.promises.readFile(path, 'utf-8');
    });
}
exports.readFile = readFile;


/***/ }),

/***/ 109:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(186));
const constants_1 = __nccwpck_require__(105);
const utils = __importStar(__nccwpck_require__(918));
const files_1 = __nccwpck_require__(743);
const utils_1 = __nccwpck_require__(918);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let workdir = utils.getInput(constants_1.Inputs.Workdir, { required: true });
            const patterns = utils.getInputAsArray(constants_1.Inputs.Patterns, {
                required: true
            });
            const gitignore = utils.getInputAsBool(constants_1.Inputs.Gitignore) || true;
            const ignoreFiles = utils.getInputAsArray(constants_1.Inputs.IgnoreFiles);
            if (!workdir.endsWith('/')) {
                workdir += '/';
            }
            core.debug(`workdir: ${workdir}`);
            core.debug(`patterns: ${patterns}`);
            core.debug(`gitignore: ${gitignore}`);
            core.debug(`ignoreFiles: ${ignoreFiles}`);
            const files = yield (0, files_1.getFiles)(workdir, patterns, { gitignore, ignoreFiles });
            let hash = '';
            const reads = files.map((file) => __awaiter(this, void 0, void 0, function* () { return (0, files_1.readFile)(file); }));
            const fileContents = yield Promise.all(reads);
            const contents = yield Promise.all(fileContents.map((fileContent) => __awaiter(this, void 0, void 0, function* () { return (0, utils_1.hashHexAsync)(fileContent); })));
            if (contents.length === 1) {
                hash = contents[0];
            }
            else if (contents.length > 1) {
                let hashStr = '';
                for (const content of contents) {
                    hashStr += content;
                }
                hash = utils.hashHex(hashStr);
            }
            core.info('');
            core.info('MatchedFiles:');
            core.info(`  ${files.toString()}`);
            core.info(`Hash: ${hash}`);
            core.setOutput(constants_1.Outputs.Hash, hash);
            core.setOutput(constants_1.Outputs.MatchedFiles, files);
        }
        catch (error) {
            if (error instanceof Error)
                core.setFailed(error.message);
        }
    });
}
run();


/***/ }),

/***/ 918:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hashHexAsync = exports.hashHex = exports.getInputAsBool = exports.getInputAsInt = exports.getInputAsArray = exports.getInput = void 0;
const core = __importStar(__nccwpck_require__(186));
const crypto_1 = __importDefault(__nccwpck_require__(113));
function getInput(name, options) {
    return core.getInput(name, options);
}
exports.getInput = getInput;
function getInputAsArray(name, options) {
    return core
        .getInput(name, options)
        .split('\n')
        .map(s => s.replace(/^!\s+/, '!').trim())
        .filter(x => x !== '');
}
exports.getInputAsArray = getInputAsArray;
function getInputAsInt(name, options) {
    const value = parseInt(core.getInput(name, options));
    if (isNaN(value) || value < 0) {
        return undefined;
    }
    return value;
}
exports.getInputAsInt = getInputAsInt;
function getInputAsBool(name, options) {
    const result = core.getInput(name, options);
    return result.toLowerCase() === 'true';
}
exports.getInputAsBool = getInputAsBool;
function hashHex(content, shaAlgorithm = 'sha256') {
    return crypto_1.default.createHash(shaAlgorithm).update(content).digest('hex');
}
exports.hashHex = hashHex;
function hashHexAsync(content, shaAlgorithm = 'sha256') {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(RES => {
            RES(hashHex(content, shaAlgorithm));
        });
    });
}
exports.hashHexAsync = hashHexAsync;


/***/ }),

/***/ 351:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issue = exports.issueCommand = void 0;
const os = __importStar(__nccwpck_require__(37));
const utils_1 = __nccwpck_require__(278);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 186:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __nccwpck_require__(351);
const file_command_1 = __nccwpck_require__(717);
const utils_1 = __nccwpck_require__(278);
const os = __importStar(__nccwpck_require__(37));
const path = __importStar(__nccwpck_require__(17));
const oidc_utils_1 = __nccwpck_require__(41);
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        return file_command_1.issueFileCommand('ENV', file_command_1.prepareKeyValueMessage(name, val));
    }
    command_1.issueCommand('set-env', { name }, convertedVal);
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueFileCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
        return val;
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */
function getMultilineInput(name, options) {
    const inputs = getInput(name, options)
        .split('\n')
        .filter(x => x !== '');
    if (options && options.trimWhitespace === false) {
        return inputs;
    }
    return inputs.map(input => input.trim());
}
exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
function getBooleanInput(name, options) {
    const trueValue = ['true', 'True', 'TRUE'];
    const falseValue = ['false', 'False', 'FALSE'];
    const val = getInput(name, options);
    if (trueValue.includes(val))
        return true;
    if (falseValue.includes(val))
        return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    const filePath = process.env['GITHUB_OUTPUT'] || '';
    if (filePath) {
        return file_command_1.issueFileCommand('OUTPUT', file_command_1.prepareKeyValueMessage(name, value));
    }
    process.stdout.write(os.EOL);
    command_1.issueCommand('set-output', { name }, utils_1.toCommandValue(value));
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function error(message, properties = {}) {
    command_1.issueCommand('error', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function warning(message, properties = {}) {
    command_1.issueCommand('warning', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function notice(message, properties = {}) {
    command_1.issueCommand('notice', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.notice = notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    const filePath = process.env['GITHUB_STATE'] || '';
    if (filePath) {
        return file_command_1.issueFileCommand('STATE', file_command_1.prepareKeyValueMessage(name, value));
    }
    command_1.issueCommand('save-state', { name }, utils_1.toCommandValue(value));
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
function getIDToken(aud) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud);
    });
}
exports.getIDToken = getIDToken;
/**
 * Summary exports
 */
var summary_1 = __nccwpck_require__(327);
Object.defineProperty(exports, "summary", ({ enumerable: true, get: function () { return summary_1.summary; } }));
/**
 * @deprecated use core.summary
 */
var summary_2 = __nccwpck_require__(327);
Object.defineProperty(exports, "markdownSummary", ({ enumerable: true, get: function () { return summary_2.markdownSummary; } }));
/**
 * Path exports
 */
var path_utils_1 = __nccwpck_require__(981);
Object.defineProperty(exports, "toPosixPath", ({ enumerable: true, get: function () { return path_utils_1.toPosixPath; } }));
Object.defineProperty(exports, "toWin32Path", ({ enumerable: true, get: function () { return path_utils_1.toWin32Path; } }));
Object.defineProperty(exports, "toPlatformPath", ({ enumerable: true, get: function () { return path_utils_1.toPlatformPath; } }));
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 717:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// For internal use, subject to change.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prepareKeyValueMessage = exports.issueFileCommand = void 0;
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__nccwpck_require__(147));
const os = __importStar(__nccwpck_require__(37));
const uuid_1 = __nccwpck_require__(840);
const utils_1 = __nccwpck_require__(278);
function issueFileCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueFileCommand = issueFileCommand;
function prepareKeyValueMessage(key, value) {
    const delimiter = `ghadelimiter_${uuid_1.v4()}`;
    const convertedValue = utils_1.toCommandValue(value);
    // These should realistically never happen, but just in case someone finds a
    // way to exploit uuid generation let's not allow keys or values that contain
    // the delimiter.
    if (key.includes(delimiter)) {
        throw new Error(`Unexpected input: name should not contain the delimiter "${delimiter}"`);
    }
    if (convertedValue.includes(delimiter)) {
        throw new Error(`Unexpected input: value should not contain the delimiter "${delimiter}"`);
    }
    return `${key}<<${delimiter}${os.EOL}${convertedValue}${os.EOL}${delimiter}`;
}
exports.prepareKeyValueMessage = prepareKeyValueMessage;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 41:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OidcClient = void 0;
const http_client_1 = __nccwpck_require__(255);
const auth_1 = __nccwpck_require__(526);
const core_1 = __nccwpck_require__(186);
class OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
            allowRetries: allowRetry,
            maxRetries: maxRetry
        };
        return new http_client_1.HttpClient('actions/oidc-client', [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
    static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
        if (!token) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
        }
        return token;
    }
    static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];
        if (!runtimeUrl) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
        }
        return runtimeUrl;
    }
    static getCall(id_token_url) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const httpclient = OidcClient.createHttpClient();
            const res = yield httpclient
                .getJson(id_token_url)
                .catch(error => {
                throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.result.message}`);
            });
            const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
            if (!id_token) {
                throw new Error('Response json body do not have ID Token field');
            }
            return id_token;
        });
    }
    static getIDToken(audience) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // New ID Token is requested from action service
                let id_token_url = OidcClient.getIDTokenUrl();
                if (audience) {
                    const encodedAudience = encodeURIComponent(audience);
                    id_token_url = `${id_token_url}&audience=${encodedAudience}`;
                }
                core_1.debug(`ID token url is ${id_token_url}`);
                const id_token = yield OidcClient.getCall(id_token_url);
                core_1.setSecret(id_token);
                return id_token;
            }
            catch (error) {
                throw new Error(`Error message: ${error.message}`);
            }
        });
    }
}
exports.OidcClient = OidcClient;
//# sourceMappingURL=oidc-utils.js.map

/***/ }),

/***/ 981:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = void 0;
const path = __importStar(__nccwpck_require__(17));
/**
 * toPosixPath converts the given path to the posix form. On Windows, \\ will be
 * replaced with /.
 *
 * @param pth. Path to transform.
 * @return string Posix path.
 */
function toPosixPath(pth) {
    return pth.replace(/[\\]/g, '/');
}
exports.toPosixPath = toPosixPath;
/**
 * toWin32Path converts the given path to the win32 form. On Linux, / will be
 * replaced with \\.
 *
 * @param pth. Path to transform.
 * @return string Win32 path.
 */
function toWin32Path(pth) {
    return pth.replace(/[/]/g, '\\');
}
exports.toWin32Path = toWin32Path;
/**
 * toPlatformPath converts the given path to a platform-specific path. It does
 * this by replacing instances of / and \ with the platform-specific path
 * separator.
 *
 * @param pth The path to platformize.
 * @return string The platform-specific path.
 */
function toPlatformPath(pth) {
    return pth.replace(/[/\\]/g, path.sep);
}
exports.toPlatformPath = toPlatformPath;
//# sourceMappingURL=path-utils.js.map

/***/ }),

/***/ 327:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.summary = exports.markdownSummary = exports.SUMMARY_DOCS_URL = exports.SUMMARY_ENV_VAR = void 0;
const os_1 = __nccwpck_require__(37);
const fs_1 = __nccwpck_require__(147);
const { access, appendFile, writeFile } = fs_1.promises;
exports.SUMMARY_ENV_VAR = 'GITHUB_STEP_SUMMARY';
exports.SUMMARY_DOCS_URL = 'https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary';
class Summary {
    constructor() {
        this._buffer = '';
    }
    /**
     * Finds the summary file path from the environment, rejects if env var is not found or file does not exist
     * Also checks r/w permissions.
     *
     * @returns step summary file path
     */
    filePath() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._filePath) {
                return this._filePath;
            }
            const pathFromEnv = process.env[exports.SUMMARY_ENV_VAR];
            if (!pathFromEnv) {
                throw new Error(`Unable to find environment variable for $${exports.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
            }
            try {
                yield access(pathFromEnv, fs_1.constants.R_OK | fs_1.constants.W_OK);
            }
            catch (_a) {
                throw new Error(`Unable to access summary file: '${pathFromEnv}'. Check if the file has correct read/write permissions.`);
            }
            this._filePath = pathFromEnv;
            return this._filePath;
        });
    }
    /**
     * Wraps content in an HTML tag, adding any HTML attributes
     *
     * @param {string} tag HTML tag to wrap
     * @param {string | null} content content within the tag
     * @param {[attribute: string]: string} attrs key-value list of HTML attributes to add
     *
     * @returns {string} content wrapped in HTML element
     */
    wrap(tag, content, attrs = {}) {
        const htmlAttrs = Object.entries(attrs)
            .map(([key, value]) => ` ${key}="${value}"`)
            .join('');
        if (!content) {
            return `<${tag}${htmlAttrs}>`;
        }
        return `<${tag}${htmlAttrs}>${content}</${tag}>`;
    }
    /**
     * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
     *
     * @param {SummaryWriteOptions} [options] (optional) options for write operation
     *
     * @returns {Promise<Summary>} summary instance
     */
    write(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const overwrite = !!(options === null || options === void 0 ? void 0 : options.overwrite);
            const filePath = yield this.filePath();
            const writeFunc = overwrite ? writeFile : appendFile;
            yield writeFunc(filePath, this._buffer, { encoding: 'utf8' });
            return this.emptyBuffer();
        });
    }
    /**
     * Clears the summary buffer and wipes the summary file
     *
     * @returns {Summary} summary instance
     */
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.emptyBuffer().write({ overwrite: true });
        });
    }
    /**
     * Returns the current summary buffer as a string
     *
     * @returns {string} string of summary buffer
     */
    stringify() {
        return this._buffer;
    }
    /**
     * If the summary buffer is empty
     *
     * @returns {boolen} true if the buffer is empty
     */
    isEmptyBuffer() {
        return this._buffer.length === 0;
    }
    /**
     * Resets the summary buffer without writing to summary file
     *
     * @returns {Summary} summary instance
     */
    emptyBuffer() {
        this._buffer = '';
        return this;
    }
    /**
     * Adds raw text to the summary buffer
     *
     * @param {string} text content to add
     * @param {boolean} [addEOL=false] (optional) append an EOL to the raw text (default: false)
     *
     * @returns {Summary} summary instance
     */
    addRaw(text, addEOL = false) {
        this._buffer += text;
        return addEOL ? this.addEOL() : this;
    }
    /**
     * Adds the operating system-specific end-of-line marker to the buffer
     *
     * @returns {Summary} summary instance
     */
    addEOL() {
        return this.addRaw(os_1.EOL);
    }
    /**
     * Adds an HTML codeblock to the summary buffer
     *
     * @param {string} code content to render within fenced code block
     * @param {string} lang (optional) language to syntax highlight code
     *
     * @returns {Summary} summary instance
     */
    addCodeBlock(code, lang) {
        const attrs = Object.assign({}, (lang && { lang }));
        const element = this.wrap('pre', this.wrap('code', code), attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML list to the summary buffer
     *
     * @param {string[]} items list of items to render
     * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
     *
     * @returns {Summary} summary instance
     */
    addList(items, ordered = false) {
        const tag = ordered ? 'ol' : 'ul';
        const listItems = items.map(item => this.wrap('li', item)).join('');
        const element = this.wrap(tag, listItems);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML table to the summary buffer
     *
     * @param {SummaryTableCell[]} rows table rows
     *
     * @returns {Summary} summary instance
     */
    addTable(rows) {
        const tableBody = rows
            .map(row => {
            const cells = row
                .map(cell => {
                if (typeof cell === 'string') {
                    return this.wrap('td', cell);
                }
                const { header, data, colspan, rowspan } = cell;
                const tag = header ? 'th' : 'td';
                const attrs = Object.assign(Object.assign({}, (colspan && { colspan })), (rowspan && { rowspan }));
                return this.wrap(tag, data, attrs);
            })
                .join('');
            return this.wrap('tr', cells);
        })
            .join('');
        const element = this.wrap('table', tableBody);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds a collapsable HTML details element to the summary buffer
     *
     * @param {string} label text for the closed state
     * @param {string} content collapsable content
     *
     * @returns {Summary} summary instance
     */
    addDetails(label, content) {
        const element = this.wrap('details', this.wrap('summary', label) + content);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML image tag to the summary buffer
     *
     * @param {string} src path to the image you to embed
     * @param {string} alt text description of the image
     * @param {SummaryImageOptions} options (optional) addition image attributes
     *
     * @returns {Summary} summary instance
     */
    addImage(src, alt, options) {
        const { width, height } = options || {};
        const attrs = Object.assign(Object.assign({}, (width && { width })), (height && { height }));
        const element = this.wrap('img', null, Object.assign({ src, alt }, attrs));
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML section heading element
     *
     * @param {string} text heading text
     * @param {number | string} [level=1] (optional) the heading level, default: 1
     *
     * @returns {Summary} summary instance
     */
    addHeading(text, level) {
        const tag = `h${level}`;
        const allowedTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)
            ? tag
            : 'h1';
        const element = this.wrap(allowedTag, text);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML thematic break (<hr>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addSeparator() {
        const element = this.wrap('hr', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML line break (<br>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addBreak() {
        const element = this.wrap('br', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML blockquote to the summary buffer
     *
     * @param {string} text quote text
     * @param {string} cite (optional) citation url
     *
     * @returns {Summary} summary instance
     */
    addQuote(text, cite) {
        const attrs = Object.assign({}, (cite && { cite }));
        const element = this.wrap('blockquote', text, attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML anchor tag to the summary buffer
     *
     * @param {string} text link text/content
     * @param {string} href hyperlink
     *
     * @returns {Summary} summary instance
     */
    addLink(text, href) {
        const element = this.wrap('a', text, { href });
        return this.addRaw(element).addEOL();
    }
}
const _summary = new Summary();
/**
 * @deprecated use `core.summary`
 */
exports.markdownSummary = _summary;
exports.summary = _summary;
//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 278:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toCommandProperties = exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */
function toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) {
        return {};
    }
    return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
exports.toCommandProperties = toCommandProperties;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 526:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonalAccessTokenCredentialHandler = exports.BearerCredentialHandler = exports.BasicCredentialHandler = void 0;
class BasicCredentialHandler {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BasicCredentialHandler = BasicCredentialHandler;
class BearerCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Bearer ${this.token}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BearerCredentialHandler = BearerCredentialHandler;
class PersonalAccessTokenCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`PAT:${this.token}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 255:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpClient = exports.isHttps = exports.HttpClientResponse = exports.HttpClientError = exports.getProxyUrl = exports.MediaTypes = exports.Headers = exports.HttpCodes = void 0;
const http = __importStar(__nccwpck_require__(685));
const https = __importStar(__nccwpck_require__(687));
const pm = __importStar(__nccwpck_require__(835));
const tunnel = __importStar(__nccwpck_require__(294));
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    const proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
exports.HttpClientError = HttpClientError;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let output = Buffer.alloc(0);
                this.message.on('data', (chunk) => {
                    output = Buffer.concat([output, chunk]);
                });
                this.message.on('end', () => {
                    resolve(output.toString());
                });
            }));
        });
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    const parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
        });
    }
    get(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('GET', requestUrl, null, additionalHeaders || {});
        });
    }
    del(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('DELETE', requestUrl, null, additionalHeaders || {});
        });
    }
    post(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('POST', requestUrl, data, additionalHeaders || {});
        });
    }
    patch(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PATCH', requestUrl, data, additionalHeaders || {});
        });
    }
    put(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PUT', requestUrl, data, additionalHeaders || {});
        });
    }
    head(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('HEAD', requestUrl, null, additionalHeaders || {});
        });
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(verb, requestUrl, stream, additionalHeaders);
        });
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    getJson(requestUrl, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            const res = yield this.get(requestUrl, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    postJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.post(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    putJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.put(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    patchJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.patch(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    request(verb, requestUrl, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._disposed) {
                throw new Error('Client has already been disposed.');
            }
            const parsedUrl = new URL(requestUrl);
            let info = this._prepareRequest(verb, parsedUrl, headers);
            // Only perform retries on reads since writes may not be idempotent.
            const maxTries = this._allowRetries && RetryableHttpVerbs.includes(verb)
                ? this._maxRetries + 1
                : 1;
            let numTries = 0;
            let response;
            do {
                response = yield this.requestRaw(info, data);
                // Check if it's an authentication challenge
                if (response &&
                    response.message &&
                    response.message.statusCode === HttpCodes.Unauthorized) {
                    let authenticationHandler;
                    for (const handler of this.handlers) {
                        if (handler.canHandleAuthentication(response)) {
                            authenticationHandler = handler;
                            break;
                        }
                    }
                    if (authenticationHandler) {
                        return authenticationHandler.handleAuthentication(this, info, data);
                    }
                    else {
                        // We have received an unauthorized response but have no handlers to handle it.
                        // Let the response return to the caller.
                        return response;
                    }
                }
                let redirectsRemaining = this._maxRedirects;
                while (response.message.statusCode &&
                    HttpRedirectCodes.includes(response.message.statusCode) &&
                    this._allowRedirects &&
                    redirectsRemaining > 0) {
                    const redirectUrl = response.message.headers['location'];
                    if (!redirectUrl) {
                        // if there's no location to redirect to, we won't
                        break;
                    }
                    const parsedRedirectUrl = new URL(redirectUrl);
                    if (parsedUrl.protocol === 'https:' &&
                        parsedUrl.protocol !== parsedRedirectUrl.protocol &&
                        !this._allowRedirectDowngrade) {
                        throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                    }
                    // we need to finish reading the response before reassigning response
                    // which will leak the open socket.
                    yield response.readBody();
                    // strip authorization header if redirected to a different hostname
                    if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                        for (const header in headers) {
                            // header names are case insensitive
                            if (header.toLowerCase() === 'authorization') {
                                delete headers[header];
                            }
                        }
                    }
                    // let's make the request with the new redirectUrl
                    info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                    response = yield this.requestRaw(info, data);
                    redirectsRemaining--;
                }
                if (!response.message.statusCode ||
                    !HttpResponseRetryCodes.includes(response.message.statusCode)) {
                    // If not a retry code, return immediately instead of retrying
                    return response;
                }
                numTries += 1;
                if (numTries < maxTries) {
                    yield response.readBody();
                    yield this._performExponentialBackoff(numTries);
                }
            } while (numTries < maxTries);
            return response;
        });
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                function callbackForResult(err, res) {
                    if (err) {
                        reject(err);
                    }
                    else if (!res) {
                        // If `err` is not passed, then `res` must be passed.
                        reject(new Error('Unknown error'));
                    }
                    else {
                        resolve(res);
                    }
                }
                this.requestRawWithCallback(info, data, callbackForResult);
            });
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        if (typeof data === 'string') {
            if (!info.options.headers) {
                info.options.headers = {};
            }
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        function handleResult(err, res) {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        }
        const req = info.httpModule.request(info.options, (msg) => {
            const res = new HttpClientResponse(msg);
            handleResult(undefined, res);
        });
        let socket;
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error(`Request timeout: ${info.options.path}`));
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        const parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            for (const handler of this.handlers) {
                handler.prepareRequest(info.options);
            }
        }
        return info;
    }
    _mergeHeaders(headers) {
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers || {}));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        const proxyUrl = pm.getProxyUrl(parsedUrl);
        const useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        // This is `useProxy` again, but we need to check `proxyURl` directly for TypeScripts's flow analysis.
        if (proxyUrl && proxyUrl.hostname) {
            const agentOptions = {
                maxSockets,
                keepAlive: this._keepAlive,
                proxy: Object.assign(Object.assign({}, ((proxyUrl.username || proxyUrl.password) && {
                    proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                })), { host: proxyUrl.hostname, port: proxyUrl.port })
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
            const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
            return new Promise(resolve => setTimeout(() => resolve(), ms));
        });
    }
    _processResponse(res, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const statusCode = res.message.statusCode || 0;
                const response = {
                    statusCode,
                    result: null,
                    headers: {}
                };
                // not found leads to null obj returned
                if (statusCode === HttpCodes.NotFound) {
                    resolve(response);
                }
                // get the result from the body
                function dateTimeDeserializer(key, value) {
                    if (typeof value === 'string') {
                        const a = new Date(value);
                        if (!isNaN(a.valueOf())) {
                            return a;
                        }
                    }
                    return value;
                }
                let obj;
                let contents;
                try {
                    contents = yield res.readBody();
                    if (contents && contents.length > 0) {
                        if (options && options.deserializeDates) {
                            obj = JSON.parse(contents, dateTimeDeserializer);
                        }
                        else {
                            obj = JSON.parse(contents);
                        }
                        response.result = obj;
                    }
                    response.headers = res.message.headers;
                }
                catch (err) {
                    // Invalid resource (contents not json);  leaving result obj null
                }
                // note that 3xx redirects are handled by the http layer.
                if (statusCode > 299) {
                    let msg;
                    // if exception/error in body, attempt to get better error
                    if (obj && obj.message) {
                        msg = obj.message;
                    }
                    else if (contents && contents.length > 0) {
                        // it may be the case that the exception is in the body message as string
                        msg = contents;
                    }
                    else {
                        msg = `Failed request: (${statusCode})`;
                    }
                    const err = new HttpClientError(msg, statusCode);
                    err.result = response.result;
                    reject(err);
                }
                else {
                    resolve(response);
                }
            }));
        });
    }
}
exports.HttpClient = HttpClient;
const lowercaseKeys = (obj) => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 835:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkBypass = exports.getProxyUrl = void 0;
function getProxyUrl(reqUrl) {
    const usingSsl = reqUrl.protocol === 'https:';
    if (checkBypass(reqUrl)) {
        return undefined;
    }
    const proxyVar = (() => {
        if (usingSsl) {
            return process.env['https_proxy'] || process.env['HTTPS_PROXY'];
        }
        else {
            return process.env['http_proxy'] || process.env['HTTP_PROXY'];
        }
    })();
    if (proxyVar) {
        return new URL(proxyVar);
    }
    else {
        return undefined;
    }
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    const noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    const upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (const upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperReqHosts.some(x => x === upperNoProxyItem)) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;
//# sourceMappingURL=proxy.js.map

/***/ }),

/***/ 382:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var ra=Object.create;var Ye=Object.defineProperty;var na=Object.getOwnPropertyDescriptor;var sa=Object.getOwnPropertyNames;var ia=Object.getPrototypeOf,oa=Object.prototype.hasOwnProperty;var y=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),aa=(e,t)=>{for(var r in t)Ye(e,r,{get:t[r],enumerable:!0})},Tn=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of sa(t))!oa.call(e,s)&&s!==r&&Ye(e,s,{get:()=>t[s],enumerable:!(n=na(t,s))||n.enumerable});return e};var re=(e,t,r)=>(r=e!=null?ra(ia(e)):{},Tn(t||!e||!e.__esModule?Ye(r,"default",{value:e,enumerable:!0}):r,e)),ua=e=>Tn(Ye({},"__esModule",{value:!0}),e);var Lt=y((Vf,kn)=>{"use strict";var ca=__nccwpck_require__(781),On=ca.PassThrough,la=Array.prototype.slice;kn.exports=fa;function fa(){let e=[],t=la.call(arguments),r=!1,n=t[t.length-1];n&&!Array.isArray(n)&&n.pipe==null?t.pop():n={};let s=n.end!==!1,i=n.pipeError===!0;n.objectMode==null&&(n.objectMode=!0),n.highWaterMark==null&&(n.highWaterMark=64*1024);let o=On(n);function a(){for(let f=0,g=arguments.length;f<g;f++)e.push(Ln(arguments[f],n));return u(),this}function u(){if(r)return;r=!0;let f=e.shift();if(!f){process.nextTick(d);return}Array.isArray(f)||(f=[f]);let g=f.length+1;function p(){--g>0||(r=!1,u())}function T(S){function E(){S.removeListener("merge2UnpipeEnd",E),S.removeListener("end",E),i&&S.removeListener("error",b),p()}function b(v){o.emit("error",v)}if(S._readableState.endEmitted)return p();S.on("merge2UnpipeEnd",E),S.on("end",E),i&&S.on("error",b),S.pipe(o,{end:!1}),S.resume()}for(let S=0;S<f.length;S++)T(f[S]);p()}function d(){r=!1,o.emit("queueDrain"),s&&o.end()}return o.setMaxListeners(0),o.add=a,o.on("unpipe",function(f){f.emit("merge2UnpipeEnd")}),t.length&&a.apply(null,t),o}function Ln(e,t){if(Array.isArray(e))for(let r=0,n=e.length;r<n;r++)e[r]=Ln(e[r],t);else{if(!e._readableState&&e.pipe&&(e=e.pipe(On(t))),!e._readableState||!e.pause||!e.pipe)throw new Error("Only readable stream can be merged.");e.pause()}return e}});var $n=y(Ce=>{"use strict";Object.defineProperty(Ce,"__esModule",{value:!0});Ce.splitWhen=Ce.flatten=void 0;function pa(e){return e.reduce((t,r)=>[].concat(t,r),[])}Ce.flatten=pa;function ha(e,t){let r=[[]],n=0;for(let s of e)t(s)?(n++,r[n]=[]):r[n].push(s);return r}Ce.splitWhen=ha});var Hn=y(Ze=>{"use strict";Object.defineProperty(Ze,"__esModule",{value:!0});Ze.isEnoentCodeError=void 0;function da(e){return e.code==="ENOENT"}Ze.isEnoentCodeError=da});var In=y(ze=>{"use strict";Object.defineProperty(ze,"__esModule",{value:!0});ze.createDirentFromStats=void 0;var kt=class{constructor(t,r){this.name=t,this.isBlockDevice=r.isBlockDevice.bind(r),this.isCharacterDevice=r.isCharacterDevice.bind(r),this.isDirectory=r.isDirectory.bind(r),this.isFIFO=r.isFIFO.bind(r),this.isFile=r.isFile.bind(r),this.isSocket=r.isSocket.bind(r),this.isSymbolicLink=r.isSymbolicLink.bind(r)}};function _a(e,t){return new kt(e,t)}ze.createDirentFromStats=_a});var Dn=y(ne=>{"use strict";Object.defineProperty(ne,"__esModule",{value:!0});ne.removeLeadingDotSegment=ne.escape=ne.makeAbsolute=ne.unixify=void 0;var ga=__nccwpck_require__(17),ya=2,Sa=/(\\?)([()*?[\]{|}]|^!|[!+@](?=\())/g;function ma(e){return e.replace(/\\/g,"/")}ne.unixify=ma;function Ea(e,t){return ga.resolve(e,t)}ne.makeAbsolute=Ea;function Aa(e){return e.replace(Sa,"\\$2")}ne.escape=Aa;function Ra(e){if(e.charAt(0)==="."){let t=e.charAt(1);if(t==="/"||t==="\\")return e.slice(ya)}return e}ne.removeLeadingDotSegment=Ra});var Mn=y((Zf,Nn)=>{Nn.exports=function(t){if(typeof t!="string"||t==="")return!1;for(var r;r=/(\\).|([@?!+*]\(.*\))/g.exec(t);){if(r[2])return!0;t=t.slice(r.index+r[0].length)}return!1}});var Bn=y((zf,qn)=>{var ba=Mn(),Fn={"{":"}","(":")","[":"]"},va=function(e){if(e[0]==="!")return!0;for(var t=0,r=-2,n=-2,s=-2,i=-2,o=-2;t<e.length;){if(e[t]==="*"||e[t+1]==="?"&&/[\].+)]/.test(e[t])||n!==-1&&e[t]==="["&&e[t+1]!=="]"&&(n<t&&(n=e.indexOf("]",t)),n>t&&(o===-1||o>n||(o=e.indexOf("\\",t),o===-1||o>n)))||s!==-1&&e[t]==="{"&&e[t+1]!=="}"&&(s=e.indexOf("}",t),s>t&&(o=e.indexOf("\\",t),o===-1||o>s))||i!==-1&&e[t]==="("&&e[t+1]==="?"&&/[:!=]/.test(e[t+2])&&e[t+3]!==")"&&(i=e.indexOf(")",t),i>t&&(o=e.indexOf("\\",t),o===-1||o>i))||r!==-1&&e[t]==="("&&e[t+1]!=="|"&&(r<t&&(r=e.indexOf("|",t)),r!==-1&&e[r+1]!==")"&&(i=e.indexOf(")",r),i>r&&(o=e.indexOf("\\",r),o===-1||o>i))))return!0;if(e[t]==="\\"){var a=e[t+1];t+=2;var u=Fn[a];if(u){var d=e.indexOf(u,t);d!==-1&&(t=d+1)}if(e[t]==="!")return!0}else t++}return!1},xa=function(e){if(e[0]==="!")return!0;for(var t=0;t<e.length;){if(/[*?{}()[\]]/.test(e[t]))return!0;if(e[t]==="\\"){var r=e[t+1];t+=2;var n=Fn[r];if(n){var s=e.indexOf(n,t);s!==-1&&(t=s+1)}if(e[t]==="!")return!0}else t++}return!1};qn.exports=function(t,r){if(typeof t!="string"||t==="")return!1;if(ba(t))return!0;var n=va;return r&&r.strict===!1&&(n=xa),n(t)}});var jn=y((Jf,Gn)=>{"use strict";var Pa=Bn(),wa=(__nccwpck_require__(17).posix.dirname),Ca=(__nccwpck_require__(37).platform)()==="win32",$t="/",Ta=/\\/g,Oa=/[\{\[].*[\}\]]$/,La=/(^|[^\\])([\{\[]|\([^\)]+$)/,ka=/\\([\!\*\?\|\[\]\(\)\{\}])/g;Gn.exports=function(t,r){var n=Object.assign({flipBackslashes:!0},r);n.flipBackslashes&&Ca&&t.indexOf($t)<0&&(t=t.replace(Ta,$t)),Oa.test(t)&&(t+=$t),t+="a";do t=wa(t);while(Pa(t)||La.test(t));return t.replace(ka,"$1")}});var Je=y(z=>{"use strict";z.isInteger=e=>typeof e=="number"?Number.isInteger(e):typeof e=="string"&&e.trim()!==""?Number.isInteger(Number(e)):!1;z.find=(e,t)=>e.nodes.find(r=>r.type===t);z.exceedsLimit=(e,t,r=1,n)=>n===!1||!z.isInteger(e)||!z.isInteger(t)?!1:(Number(t)-Number(e))/Number(r)>=n;z.escapeNode=(e,t=0,r)=>{let n=e.nodes[t];n&&(r&&n.type===r||n.type==="open"||n.type==="close")&&n.escaped!==!0&&(n.value="\\"+n.value,n.escaped=!0)};z.encloseBrace=e=>e.type!=="brace"||e.commas>>0+e.ranges>>0?!1:(e.invalid=!0,!0);z.isInvalidBrace=e=>e.type!=="brace"?!1:e.invalid===!0||e.dollar?!0:!(e.commas>>0+e.ranges>>0)||e.open!==!0||e.close!==!0?(e.invalid=!0,!0):!1;z.isOpenOrClose=e=>e.type==="open"||e.type==="close"?!0:e.open===!0||e.close===!0;z.reduce=e=>e.reduce((t,r)=>(r.type==="text"&&t.push(r.value),r.type==="range"&&(r.type="text"),t),[]);z.flatten=(...e)=>{let t=[],r=n=>{for(let s=0;s<n.length;s++){let i=n[s];Array.isArray(i)?r(i,t):i!==void 0&&t.push(i)}return t};return r(e),t}});var et=y((tp,Wn)=>{"use strict";var Un=Je();Wn.exports=(e,t={})=>{let r=(n,s={})=>{let i=t.escapeInvalid&&Un.isInvalidBrace(s),o=n.invalid===!0&&t.escapeInvalid===!0,a="";if(n.value)return(i||o)&&Un.isOpenOrClose(n)?"\\"+n.value:n.value;if(n.value)return n.value;if(n.nodes)for(let u of n.nodes)a+=r(u);return a};return r(e)}});var Kn=y((rp,Vn)=>{"use strict";Vn.exports=function(e){return typeof e=="number"?e-e===0:typeof e=="string"&&e.trim()!==""?Number.isFinite?Number.isFinite(+e):isFinite(+e):!1}});var rs=y((np,ts)=>{"use strict";var Xn=Kn(),Ee=(e,t,r)=>{if(Xn(e)===!1)throw new TypeError("toRegexRange: expected the first argument to be a number");if(t===void 0||e===t)return String(e);if(Xn(t)===!1)throw new TypeError("toRegexRange: expected the second argument to be a number.");let n={relaxZeros:!0,...r};typeof n.strictZeros=="boolean"&&(n.relaxZeros=n.strictZeros===!1);let s=String(n.relaxZeros),i=String(n.shorthand),o=String(n.capture),a=String(n.wrap),u=e+":"+t+"="+s+i+o+a;if(Ee.cache.hasOwnProperty(u))return Ee.cache[u].result;let d=Math.min(e,t),f=Math.max(e,t);if(Math.abs(d-f)===1){let E=e+"|"+t;return n.capture?`(${E})`:n.wrap===!1?E:`(?:${E})`}let g=es(e)||es(t),p={min:e,max:t,a:d,b:f},T=[],S=[];if(g&&(p.isPadded=g,p.maxLen=String(p.max).length),d<0){let E=f<0?Math.abs(f):1;S=Qn(E,Math.abs(d),p,n),d=p.a=0}return f>=0&&(T=Qn(d,f,p,n)),p.negatives=S,p.positives=T,p.result=$a(S,T,n),n.capture===!0?p.result=`(${p.result})`:n.wrap!==!1&&T.length+S.length>1&&(p.result=`(?:${p.result})`),Ee.cache[u]=p,p.result};function $a(e,t,r){let n=Ht(e,t,"-",!1,r)||[],s=Ht(t,e,"",!1,r)||[],i=Ht(e,t,"-?",!0,r)||[];return n.concat(i).concat(s).join("|")}function Ha(e,t){let r=1,n=1,s=Zn(e,r),i=new Set([t]);for(;e<=s&&s<=t;)i.add(s),r+=1,s=Zn(e,r);for(s=zn(t+1,n)-1;e<s&&s<=t;)i.add(s),n+=1,s=zn(t+1,n)-1;return i=[...i],i.sort(Na),i}function Ia(e,t,r){if(e===t)return{pattern:e,count:[],digits:0};let n=Da(e,t),s=n.length,i="",o=0;for(let a=0;a<s;a++){let[u,d]=n[a];u===d?i+=u:u!=="0"||d!=="9"?i+=Ma(u,d,r):o++}return o&&(i+=r.shorthand===!0?"\\d":"[0-9]"),{pattern:i,count:[o],digits:s}}function Qn(e,t,r,n){let s=Ha(e,t),i=[],o=e,a;for(let u=0;u<s.length;u++){let d=s[u],f=Ia(String(o),String(d),n),g="";if(!r.isPadded&&a&&a.pattern===f.pattern){a.count.length>1&&a.count.pop(),a.count.push(f.count[0]),a.string=a.pattern+Jn(a.count),o=d+1;continue}r.isPadded&&(g=Fa(d,r,n)),f.string=g+f.pattern+Jn(f.count),i.push(f),o=d+1,a=f}return i}function Ht(e,t,r,n,s){let i=[];for(let o of e){let{string:a}=o;!n&&!Yn(t,"string",a)&&i.push(r+a),n&&Yn(t,"string",a)&&i.push(r+a)}return i}function Da(e,t){let r=[];for(let n=0;n<e.length;n++)r.push([e[n],t[n]]);return r}function Na(e,t){return e>t?1:t>e?-1:0}function Yn(e,t,r){return e.some(n=>n[t]===r)}function Zn(e,t){return Number(String(e).slice(0,-t)+"9".repeat(t))}function zn(e,t){return e-e%Math.pow(10,t)}function Jn(e){let[t=0,r=""]=e;return r||t>1?`{${t+(r?","+r:"")}}`:""}function Ma(e,t,r){return`[${e}${t-e===1?"":"-"}${t}]`}function es(e){return/^-?(0+)\d/.test(e)}function Fa(e,t,r){if(!t.isPadded)return e;let n=Math.abs(t.maxLen-String(e).length),s=r.relaxZeros!==!1;switch(n){case 0:return"";case 1:return s?"0?":"0";case 2:return s?"0{0,2}":"00";default:return s?`0{0,${n}}`:`0{${n}}`}}Ee.cache={};Ee.clearCache=()=>Ee.cache={};ts.exports=Ee});var Nt=y((sp,ls)=>{"use strict";var qa=__nccwpck_require__(837),is=rs(),ns=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),Ba=e=>t=>e===!0?Number(t):String(t),It=e=>typeof e=="number"||typeof e=="string"&&e!=="",Fe=e=>Number.isInteger(+e),Dt=e=>{let t=`${e}`,r=-1;if(t[0]==="-"&&(t=t.slice(1)),t==="0")return!1;for(;t[++r]==="0";);return r>0},Ga=(e,t,r)=>typeof e=="string"||typeof t=="string"?!0:r.stringify===!0,ja=(e,t,r)=>{if(t>0){let n=e[0]==="-"?"-":"";n&&(e=e.slice(1)),e=n+e.padStart(n?t-1:t,"0")}return r===!1?String(e):e},ss=(e,t)=>{let r=e[0]==="-"?"-":"";for(r&&(e=e.slice(1),t--);e.length<t;)e="0"+e;return r?"-"+e:e},Ua=(e,t)=>{e.negatives.sort((o,a)=>o<a?-1:o>a?1:0),e.positives.sort((o,a)=>o<a?-1:o>a?1:0);let r=t.capture?"":"?:",n="",s="",i;return e.positives.length&&(n=e.positives.join("|")),e.negatives.length&&(s=`-(${r}${e.negatives.join("|")})`),n&&s?i=`${n}|${s}`:i=n||s,t.wrap?`(${r}${i})`:i},os=(e,t,r,n)=>{if(r)return is(e,t,{wrap:!1,...n});let s=String.fromCharCode(e);if(e===t)return s;let i=String.fromCharCode(t);return`[${s}-${i}]`},as=(e,t,r)=>{if(Array.isArray(e)){let n=r.wrap===!0,s=r.capture?"":"?:";return n?`(${s}${e.join("|")})`:e.join("|")}return is(e,t,r)},us=(...e)=>new RangeError("Invalid range arguments: "+qa.inspect(...e)),cs=(e,t,r)=>{if(r.strictRanges===!0)throw us([e,t]);return[]},Wa=(e,t)=>{if(t.strictRanges===!0)throw new TypeError(`Expected step "${e}" to be a number`);return[]},Va=(e,t,r=1,n={})=>{let s=Number(e),i=Number(t);if(!Number.isInteger(s)||!Number.isInteger(i)){if(n.strictRanges===!0)throw us([e,t]);return[]}s===0&&(s=0),i===0&&(i=0);let o=s>i,a=String(e),u=String(t),d=String(r);r=Math.max(Math.abs(r),1);let f=Dt(a)||Dt(u)||Dt(d),g=f?Math.max(a.length,u.length,d.length):0,p=f===!1&&Ga(e,t,n)===!1,T=n.transform||Ba(p);if(n.toRegex&&r===1)return os(ss(e,g),ss(t,g),!0,n);let S={negatives:[],positives:[]},E=k=>S[k<0?"negatives":"positives"].push(Math.abs(k)),b=[],v=0;for(;o?s>=i:s<=i;)n.toRegex===!0&&r>1?E(s):b.push(ja(T(s,v),g,p)),s=o?s-r:s+r,v++;return n.toRegex===!0?r>1?Ua(S,n):as(b,null,{wrap:!1,...n}):b},Ka=(e,t,r=1,n={})=>{if(!Fe(e)&&e.length>1||!Fe(t)&&t.length>1)return cs(e,t,n);let s=n.transform||(p=>String.fromCharCode(p)),i=`${e}`.charCodeAt(0),o=`${t}`.charCodeAt(0),a=i>o,u=Math.min(i,o),d=Math.max(i,o);if(n.toRegex&&r===1)return os(u,d,!1,n);let f=[],g=0;for(;a?i>=o:i<=o;)f.push(s(i,g)),i=a?i-r:i+r,g++;return n.toRegex===!0?as(f,null,{wrap:!1,options:n}):f},tt=(e,t,r,n={})=>{if(t==null&&It(e))return[e];if(!It(e)||!It(t))return cs(e,t,n);if(typeof r=="function")return tt(e,t,1,{transform:r});if(ns(r))return tt(e,t,0,r);let s={...n};return s.capture===!0&&(s.wrap=!0),r=r||s.step||1,Fe(r)?Fe(e)&&Fe(t)?Va(e,t,r,s):Ka(e,t,Math.max(Math.abs(r),1),s):r!=null&&!ns(r)?Wa(r,s):tt(e,t,1,r)};ls.exports=tt});var hs=y((ip,ps)=>{"use strict";var Xa=Nt(),fs=Je(),Qa=(e,t={})=>{let r=(n,s={})=>{let i=fs.isInvalidBrace(s),o=n.invalid===!0&&t.escapeInvalid===!0,a=i===!0||o===!0,u=t.escapeInvalid===!0?"\\":"",d="";if(n.isOpen===!0||n.isClose===!0)return u+n.value;if(n.type==="open")return a?u+n.value:"(";if(n.type==="close")return a?u+n.value:")";if(n.type==="comma")return n.prev.type==="comma"?"":a?n.value:"|";if(n.value)return n.value;if(n.nodes&&n.ranges>0){let f=fs.reduce(n.nodes),g=Xa(...f,{...t,wrap:!1,toRegex:!0});if(g.length!==0)return f.length>1&&g.length>1?`(${g})`:g}if(n.nodes)for(let f of n.nodes)d+=r(f,n);return d};return r(e)};ps.exports=Qa});var gs=y((op,_s)=>{"use strict";var Ya=Nt(),ds=et(),Te=Je(),Ae=(e="",t="",r=!1)=>{let n=[];if(e=[].concat(e),t=[].concat(t),!t.length)return e;if(!e.length)return r?Te.flatten(t).map(s=>`{${s}}`):t;for(let s of e)if(Array.isArray(s))for(let i of s)n.push(Ae(i,t,r));else for(let i of t)r===!0&&typeof i=="string"&&(i=`{${i}}`),n.push(Array.isArray(i)?Ae(s,i,r):s+i);return Te.flatten(n)},Za=(e,t={})=>{let r=t.rangeLimit===void 0?1e3:t.rangeLimit,n=(s,i={})=>{s.queue=[];let o=i,a=i.queue;for(;o.type!=="brace"&&o.type!=="root"&&o.parent;)o=o.parent,a=o.queue;if(s.invalid||s.dollar){a.push(Ae(a.pop(),ds(s,t)));return}if(s.type==="brace"&&s.invalid!==!0&&s.nodes.length===2){a.push(Ae(a.pop(),["{}"]));return}if(s.nodes&&s.ranges>0){let g=Te.reduce(s.nodes);if(Te.exceedsLimit(...g,t.step,r))throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");let p=Ya(...g,t);p.length===0&&(p=ds(s,t)),a.push(Ae(a.pop(),p)),s.nodes=[];return}let u=Te.encloseBrace(s),d=s.queue,f=s;for(;f.type!=="brace"&&f.type!=="root"&&f.parent;)f=f.parent,d=f.queue;for(let g=0;g<s.nodes.length;g++){let p=s.nodes[g];if(p.type==="comma"&&s.type==="brace"){g===1&&d.push(""),d.push("");continue}if(p.type==="close"){a.push(Ae(a.pop(),d,u));continue}if(p.value&&p.type!=="open"){d.push(Ae(d.pop(),p.value));continue}p.nodes&&n(p,s)}return d};return Te.flatten(n(e))};_s.exports=Za});var Ss=y((ap,ys)=>{"use strict";ys.exports={MAX_LENGTH:1024*64,CHAR_0:"0",CHAR_9:"9",CHAR_UPPERCASE_A:"A",CHAR_LOWERCASE_A:"a",CHAR_UPPERCASE_Z:"Z",CHAR_LOWERCASE_Z:"z",CHAR_LEFT_PARENTHESES:"(",CHAR_RIGHT_PARENTHESES:")",CHAR_ASTERISK:"*",CHAR_AMPERSAND:"&",CHAR_AT:"@",CHAR_BACKSLASH:"\\",CHAR_BACKTICK:"`",CHAR_CARRIAGE_RETURN:"\r",CHAR_CIRCUMFLEX_ACCENT:"^",CHAR_COLON:":",CHAR_COMMA:",",CHAR_DOLLAR:"$",CHAR_DOT:".",CHAR_DOUBLE_QUOTE:'"',CHAR_EQUAL:"=",CHAR_EXCLAMATION_MARK:"!",CHAR_FORM_FEED:"\f",CHAR_FORWARD_SLASH:"/",CHAR_HASH:"#",CHAR_HYPHEN_MINUS:"-",CHAR_LEFT_ANGLE_BRACKET:"<",CHAR_LEFT_CURLY_BRACE:"{",CHAR_LEFT_SQUARE_BRACKET:"[",CHAR_LINE_FEED:`
`,CHAR_NO_BREAK_SPACE:"\xA0",CHAR_PERCENT:"%",CHAR_PLUS:"+",CHAR_QUESTION_MARK:"?",CHAR_RIGHT_ANGLE_BRACKET:">",CHAR_RIGHT_CURLY_BRACE:"}",CHAR_RIGHT_SQUARE_BRACKET:"]",CHAR_SEMICOLON:";",CHAR_SINGLE_QUOTE:"'",CHAR_SPACE:" ",CHAR_TAB:"	",CHAR_UNDERSCORE:"_",CHAR_VERTICAL_LINE:"|",CHAR_ZERO_WIDTH_NOBREAK_SPACE:"\uFEFF"}});var bs=y((up,Rs)=>{"use strict";var za=et(),{MAX_LENGTH:ms,CHAR_BACKSLASH:Mt,CHAR_BACKTICK:Ja,CHAR_COMMA:eu,CHAR_DOT:tu,CHAR_LEFT_PARENTHESES:ru,CHAR_RIGHT_PARENTHESES:nu,CHAR_LEFT_CURLY_BRACE:su,CHAR_RIGHT_CURLY_BRACE:iu,CHAR_LEFT_SQUARE_BRACKET:Es,CHAR_RIGHT_SQUARE_BRACKET:As,CHAR_DOUBLE_QUOTE:ou,CHAR_SINGLE_QUOTE:au,CHAR_NO_BREAK_SPACE:uu,CHAR_ZERO_WIDTH_NOBREAK_SPACE:cu}=Ss(),lu=(e,t={})=>{if(typeof e!="string")throw new TypeError("Expected a string");let r=t||{},n=typeof r.maxLength=="number"?Math.min(ms,r.maxLength):ms;if(e.length>n)throw new SyntaxError(`Input length (${e.length}), exceeds max characters (${n})`);let s={type:"root",input:e,nodes:[]},i=[s],o=s,a=s,u=0,d=e.length,f=0,g=0,p,T={},S=()=>e[f++],E=b=>{if(b.type==="text"&&a.type==="dot"&&(a.type="text"),a&&a.type==="text"&&b.type==="text"){a.value+=b.value;return}return o.nodes.push(b),b.parent=o,b.prev=a,a=b,b};for(E({type:"bos"});f<d;)if(o=i[i.length-1],p=S(),!(p===cu||p===uu)){if(p===Mt){E({type:"text",value:(t.keepEscaping?p:"")+S()});continue}if(p===As){E({type:"text",value:"\\"+p});continue}if(p===Es){u++;let b=!0,v;for(;f<d&&(v=S());){if(p+=v,v===Es){u++;continue}if(v===Mt){p+=S();continue}if(v===As&&(u--,u===0))break}E({type:"text",value:p});continue}if(p===ru){o=E({type:"paren",nodes:[]}),i.push(o),E({type:"text",value:p});continue}if(p===nu){if(o.type!=="paren"){E({type:"text",value:p});continue}o=i.pop(),E({type:"text",value:p}),o=i[i.length-1];continue}if(p===ou||p===au||p===Ja){let b=p,v;for(t.keepQuotes!==!0&&(p="");f<d&&(v=S());){if(v===Mt){p+=v+S();continue}if(v===b){t.keepQuotes===!0&&(p+=v);break}p+=v}E({type:"text",value:p});continue}if(p===su){g++;let v={type:"brace",open:!0,close:!1,dollar:a.value&&a.value.slice(-1)==="$"||o.dollar===!0,depth:g,commas:0,ranges:0,nodes:[]};o=E(v),i.push(o),E({type:"open",value:p});continue}if(p===iu){if(o.type!=="brace"){E({type:"text",value:p});continue}let b="close";o=i.pop(),o.close=!0,E({type:b,value:p}),g--,o=i[i.length-1];continue}if(p===eu&&g>0){if(o.ranges>0){o.ranges=0;let b=o.nodes.shift();o.nodes=[b,{type:"text",value:za(o)}]}E({type:"comma",value:p}),o.commas++;continue}if(p===tu&&g>0&&o.commas===0){let b=o.nodes;if(g===0||b.length===0){E({type:"text",value:p});continue}if(a.type==="dot"){if(o.range=[],a.value+=p,a.type="range",o.nodes.length!==3&&o.nodes.length!==5){o.invalid=!0,o.ranges=0,a.type="text";continue}o.ranges++,o.args=[];continue}if(a.type==="range"){b.pop();let v=b[b.length-1];v.value+=a.value+p,a=v,o.ranges--;continue}E({type:"dot",value:p});continue}E({type:"text",value:p})}do if(o=i.pop(),o.type!=="root"){o.nodes.forEach(k=>{k.nodes||(k.type==="open"&&(k.isOpen=!0),k.type==="close"&&(k.isClose=!0),k.nodes||(k.type="text"),k.invalid=!0)});let b=i[i.length-1],v=b.nodes.indexOf(o);b.nodes.splice(v,1,...o.nodes)}while(i.length>0);return E({type:"eos"}),s};Rs.exports=lu});var Ps=y((cp,xs)=>{"use strict";var vs=et(),fu=hs(),pu=gs(),hu=bs(),Q=(e,t={})=>{let r=[];if(Array.isArray(e))for(let n of e){let s=Q.create(n,t);Array.isArray(s)?r.push(...s):r.push(s)}else r=[].concat(Q.create(e,t));return t&&t.expand===!0&&t.nodupes===!0&&(r=[...new Set(r)]),r};Q.parse=(e,t={})=>hu(e,t);Q.stringify=(e,t={})=>vs(typeof e=="string"?Q.parse(e,t):e,t);Q.compile=(e,t={})=>(typeof e=="string"&&(e=Q.parse(e,t)),fu(e,t));Q.expand=(e,t={})=>{typeof e=="string"&&(e=Q.parse(e,t));let r=pu(e,t);return t.noempty===!0&&(r=r.filter(Boolean)),t.nodupes===!0&&(r=[...new Set(r)]),r};Q.create=(e,t={})=>e===""||e.length<3?[e]:t.expand!==!0?Q.compile(e,t):Q.expand(e,t);xs.exports=Q});var qe=y((lp,Ls)=>{"use strict";var du=__nccwpck_require__(17),se="\\\\/",ws=`[^${se}]`,ue="\\.",_u="\\+",gu="\\?",rt="\\/",yu="(?=.)",Cs="[^/]",Ft=`(?:${rt}|$)`,Ts=`(?:^|${rt})`,qt=`${ue}{1,2}${Ft}`,Su=`(?!${ue})`,mu=`(?!${Ts}${qt})`,Eu=`(?!${ue}{0,1}${Ft})`,Au=`(?!${qt})`,Ru=`[^.${rt}]`,bu=`${Cs}*?`,Os={DOT_LITERAL:ue,PLUS_LITERAL:_u,QMARK_LITERAL:gu,SLASH_LITERAL:rt,ONE_CHAR:yu,QMARK:Cs,END_ANCHOR:Ft,DOTS_SLASH:qt,NO_DOT:Su,NO_DOTS:mu,NO_DOT_SLASH:Eu,NO_DOTS_SLASH:Au,QMARK_NO_DOT:Ru,STAR:bu,START_ANCHOR:Ts},vu={...Os,SLASH_LITERAL:`[${se}]`,QMARK:ws,STAR:`${ws}*?`,DOTS_SLASH:`${ue}{1,2}(?:[${se}]|$)`,NO_DOT:`(?!${ue})`,NO_DOTS:`(?!(?:^|[${se}])${ue}{1,2}(?:[${se}]|$))`,NO_DOT_SLASH:`(?!${ue}{0,1}(?:[${se}]|$))`,NO_DOTS_SLASH:`(?!${ue}{1,2}(?:[${se}]|$))`,QMARK_NO_DOT:`[^.${se}]`,START_ANCHOR:`(?:^|[${se}])`,END_ANCHOR:`(?:[${se}]|$)`},xu={alnum:"a-zA-Z0-9",alpha:"a-zA-Z",ascii:"\\x00-\\x7F",blank:" \\t",cntrl:"\\x00-\\x1F\\x7F",digit:"0-9",graph:"\\x21-\\x7E",lower:"a-z",print:"\\x20-\\x7E ",punct:"\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",space:" \\t\\r\\n\\v\\f",upper:"A-Z",word:"A-Za-z0-9_",xdigit:"A-Fa-f0-9"};Ls.exports={MAX_LENGTH:1024*64,POSIX_REGEX_SOURCE:xu,REGEX_BACKSLASH:/\\(?![*+?^${}(|)[\]])/g,REGEX_NON_SPECIAL_CHARS:/^[^@![\].,$*+?^{}()|\\/]+/,REGEX_SPECIAL_CHARS:/[-*+?.^${}(|)[\]]/,REGEX_SPECIAL_CHARS_BACKREF:/(\\?)((\W)(\3*))/g,REGEX_SPECIAL_CHARS_GLOBAL:/([-*+?.^${}(|)[\]])/g,REGEX_REMOVE_BACKSLASH:/(?:\[.*?[^\\]\]|\\(?=.))/g,REPLACEMENTS:{"***":"*","**/**":"**","**/**/**":"**"},CHAR_0:48,CHAR_9:57,CHAR_UPPERCASE_A:65,CHAR_LOWERCASE_A:97,CHAR_UPPERCASE_Z:90,CHAR_LOWERCASE_Z:122,CHAR_LEFT_PARENTHESES:40,CHAR_RIGHT_PARENTHESES:41,CHAR_ASTERISK:42,CHAR_AMPERSAND:38,CHAR_AT:64,CHAR_BACKWARD_SLASH:92,CHAR_CARRIAGE_RETURN:13,CHAR_CIRCUMFLEX_ACCENT:94,CHAR_COLON:58,CHAR_COMMA:44,CHAR_DOT:46,CHAR_DOUBLE_QUOTE:34,CHAR_EQUAL:61,CHAR_EXCLAMATION_MARK:33,CHAR_FORM_FEED:12,CHAR_FORWARD_SLASH:47,CHAR_GRAVE_ACCENT:96,CHAR_HASH:35,CHAR_HYPHEN_MINUS:45,CHAR_LEFT_ANGLE_BRACKET:60,CHAR_LEFT_CURLY_BRACE:123,CHAR_LEFT_SQUARE_BRACKET:91,CHAR_LINE_FEED:10,CHAR_NO_BREAK_SPACE:160,CHAR_PERCENT:37,CHAR_PLUS:43,CHAR_QUESTION_MARK:63,CHAR_RIGHT_ANGLE_BRACKET:62,CHAR_RIGHT_CURLY_BRACE:125,CHAR_RIGHT_SQUARE_BRACKET:93,CHAR_SEMICOLON:59,CHAR_SINGLE_QUOTE:39,CHAR_SPACE:32,CHAR_TAB:9,CHAR_UNDERSCORE:95,CHAR_VERTICAL_LINE:124,CHAR_ZERO_WIDTH_NOBREAK_SPACE:65279,SEP:du.sep,extglobChars(e){return{"!":{type:"negate",open:"(?:(?!(?:",close:`))${e.STAR})`},"?":{type:"qmark",open:"(?:",close:")?"},"+":{type:"plus",open:"(?:",close:")+"},"*":{type:"star",open:"(?:",close:")*"},"@":{type:"at",open:"(?:",close:")"}}},globChars(e){return e===!0?vu:Os}}});var Be=y(K=>{"use strict";var Pu=__nccwpck_require__(17),wu=process.platform==="win32",{REGEX_BACKSLASH:Cu,REGEX_REMOVE_BACKSLASH:Tu,REGEX_SPECIAL_CHARS:Ou,REGEX_SPECIAL_CHARS_GLOBAL:Lu}=qe();K.isObject=e=>e!==null&&typeof e=="object"&&!Array.isArray(e);K.hasRegexChars=e=>Ou.test(e);K.isRegexChar=e=>e.length===1&&K.hasRegexChars(e);K.escapeRegex=e=>e.replace(Lu,"\\$1");K.toPosixSlashes=e=>e.replace(Cu,"/");K.removeBackslashes=e=>e.replace(Tu,t=>t==="\\"?"":t);K.supportsLookbehinds=()=>{let e=process.version.slice(1).split(".").map(Number);return e.length===3&&e[0]>=9||e[0]===8&&e[1]>=10};K.isWindows=e=>e&&typeof e.windows=="boolean"?e.windows:wu===!0||Pu.sep==="\\";K.escapeLast=(e,t,r)=>{let n=e.lastIndexOf(t,r);return n===-1?e:e[n-1]==="\\"?K.escapeLast(e,t,n-1):`${e.slice(0,n)}\\${e.slice(n)}`};K.removePrefix=(e,t={})=>{let r=e;return r.startsWith("./")&&(r=r.slice(2),t.prefix="./"),r};K.wrapOutput=(e,t={},r={})=>{let n=r.contains?"":"^",s=r.contains?"":"$",i=`${n}(?:${e})${s}`;return t.negated===!0&&(i=`(?:^(?!${i}).*$)`),i}});var Fs=y((pp,Ms)=>{"use strict";var ks=Be(),{CHAR_ASTERISK:Bt,CHAR_AT:ku,CHAR_BACKWARD_SLASH:Ge,CHAR_COMMA:$u,CHAR_DOT:Gt,CHAR_EXCLAMATION_MARK:jt,CHAR_FORWARD_SLASH:Ns,CHAR_LEFT_CURLY_BRACE:Ut,CHAR_LEFT_PARENTHESES:Wt,CHAR_LEFT_SQUARE_BRACKET:Hu,CHAR_PLUS:Iu,CHAR_QUESTION_MARK:$s,CHAR_RIGHT_CURLY_BRACE:Du,CHAR_RIGHT_PARENTHESES:Hs,CHAR_RIGHT_SQUARE_BRACKET:Nu}=qe(),Is=e=>e===Ns||e===Ge,Ds=e=>{e.isPrefix!==!0&&(e.depth=e.isGlobstar?1/0:1)},Mu=(e,t)=>{let r=t||{},n=e.length-1,s=r.parts===!0||r.scanToEnd===!0,i=[],o=[],a=[],u=e,d=-1,f=0,g=0,p=!1,T=!1,S=!1,E=!1,b=!1,v=!1,k=!1,I=!1,Z=!1,w=!1,D=0,x,A,L={value:"",depth:0,isGlob:!1},G=()=>d>=n,h=()=>u.charCodeAt(d+1),N=()=>(x=A,u.charCodeAt(++d));for(;d<n;){A=N();let W;if(A===Ge){k=L.backslashes=!0,A=N(),A===Ut&&(v=!0);continue}if(v===!0||A===Ut){for(D++;G()!==!0&&(A=N());){if(A===Ge){k=L.backslashes=!0,N();continue}if(A===Ut){D++;continue}if(v!==!0&&A===Gt&&(A=N())===Gt){if(p=L.isBrace=!0,S=L.isGlob=!0,w=!0,s===!0)continue;break}if(v!==!0&&A===$u){if(p=L.isBrace=!0,S=L.isGlob=!0,w=!0,s===!0)continue;break}if(A===Du&&(D--,D===0)){v=!1,p=L.isBrace=!0,w=!0;break}}if(s===!0)continue;break}if(A===Ns){if(i.push(d),o.push(L),L={value:"",depth:0,isGlob:!1},w===!0)continue;if(x===Gt&&d===f+1){f+=2;continue}g=d+1;continue}if(r.noext!==!0&&(A===Iu||A===ku||A===Bt||A===$s||A===jt)===!0&&h()===Wt){if(S=L.isGlob=!0,E=L.isExtglob=!0,w=!0,A===jt&&d===f&&(Z=!0),s===!0){for(;G()!==!0&&(A=N());){if(A===Ge){k=L.backslashes=!0,A=N();continue}if(A===Hs){S=L.isGlob=!0,w=!0;break}}continue}break}if(A===Bt){if(x===Bt&&(b=L.isGlobstar=!0),S=L.isGlob=!0,w=!0,s===!0)continue;break}if(A===$s){if(S=L.isGlob=!0,w=!0,s===!0)continue;break}if(A===Hu){for(;G()!==!0&&(W=N());){if(W===Ge){k=L.backslashes=!0,N();continue}if(W===Nu){T=L.isBracket=!0,S=L.isGlob=!0,w=!0;break}}if(s===!0)continue;break}if(r.nonegate!==!0&&A===jt&&d===f){I=L.negated=!0,f++;continue}if(r.noparen!==!0&&A===Wt){if(S=L.isGlob=!0,s===!0){for(;G()!==!0&&(A=N());){if(A===Wt){k=L.backslashes=!0,A=N();continue}if(A===Hs){w=!0;break}}continue}break}if(S===!0){if(w=!0,s===!0)continue;break}}r.noext===!0&&(E=!1,S=!1);let $=u,pe="",c="";f>0&&(pe=u.slice(0,f),u=u.slice(f),g-=f),$&&S===!0&&g>0?($=u.slice(0,g),c=u.slice(g)):S===!0?($="",c=u):$=u,$&&$!==""&&$!=="/"&&$!==u&&Is($.charCodeAt($.length-1))&&($=$.slice(0,-1)),r.unescape===!0&&(c&&(c=ks.removeBackslashes(c)),$&&k===!0&&($=ks.removeBackslashes($)));let l={prefix:pe,input:e,start:f,base:$,glob:c,isBrace:p,isBracket:T,isGlob:S,isExtglob:E,isGlobstar:b,negated:I,negatedExtglob:Z};if(r.tokens===!0&&(l.maxDepth=0,Is(A)||o.push(L),l.tokens=o),r.parts===!0||r.tokens===!0){let W;for(let O=0;O<i.length;O++){let ee=W?W+1:f,te=i[O],X=e.slice(ee,te);r.tokens&&(O===0&&f!==0?(o[O].isPrefix=!0,o[O].value=pe):o[O].value=X,Ds(o[O]),l.maxDepth+=o[O].depth),(O!==0||X!=="")&&a.push(X),W=te}if(W&&W+1<e.length){let O=e.slice(W+1);a.push(O),r.tokens&&(o[o.length-1].value=O,Ds(o[o.length-1]),l.maxDepth+=o[o.length-1].depth)}l.slashes=i,l.parts=a}return l};Ms.exports=Mu});var Gs=y((hp,Bs)=>{"use strict";var nt=qe(),Y=Be(),{MAX_LENGTH:st,POSIX_REGEX_SOURCE:Fu,REGEX_NON_SPECIAL_CHARS:qu,REGEX_SPECIAL_CHARS_BACKREF:Bu,REPLACEMENTS:qs}=nt,Gu=(e,t)=>{if(typeof t.expandRange=="function")return t.expandRange(...e,t);e.sort();let r=`[${e.join("-")}]`;try{new RegExp(r)}catch{return e.map(s=>Y.escapeRegex(s)).join("..")}return r},Oe=(e,t)=>`Missing ${e}: "${t}" - use "\\\\${t}" to match literal characters`,Vt=(e,t)=>{if(typeof e!="string")throw new TypeError("Expected a string");e=qs[e]||e;let r={...t},n=typeof r.maxLength=="number"?Math.min(st,r.maxLength):st,s=e.length;if(s>n)throw new SyntaxError(`Input length: ${s}, exceeds maximum allowed length: ${n}`);let i={type:"bos",value:"",output:r.prepend||""},o=[i],a=r.capture?"":"?:",u=Y.isWindows(t),d=nt.globChars(u),f=nt.extglobChars(d),{DOT_LITERAL:g,PLUS_LITERAL:p,SLASH_LITERAL:T,ONE_CHAR:S,DOTS_SLASH:E,NO_DOT:b,NO_DOT_SLASH:v,NO_DOTS_SLASH:k,QMARK:I,QMARK_NO_DOT:Z,STAR:w,START_ANCHOR:D}=d,x=m=>`(${a}(?:(?!${D}${m.dot?E:g}).)*?)`,A=r.dot?"":b,L=r.dot?I:Z,G=r.bash===!0?x(r):w;r.capture&&(G=`(${G})`),typeof r.noext=="boolean"&&(r.noextglob=r.noext);let h={input:e,index:-1,start:0,dot:r.dot===!0,consumed:"",output:"",prefix:"",backtrack:!1,negated:!1,brackets:0,braces:0,parens:0,quotes:0,globstar:!1,tokens:o};e=Y.removePrefix(e,h),s=e.length;let N=[],$=[],pe=[],c=i,l,W=()=>h.index===s-1,O=h.peek=(m=1)=>e[h.index+m],ee=h.advance=()=>e[++h.index]||"",te=()=>e.slice(h.index+1),X=(m="",H=0)=>{h.consumed+=m,h.index+=H},Ve=m=>{h.output+=m.output!=null?m.output:m.value,X(m.value)},ea=()=>{let m=1;for(;O()==="!"&&(O(2)!=="("||O(3)==="?");)ee(),h.start++,m++;return m%2===0?!1:(h.negated=!0,h.start++,!0)},Ke=m=>{h[m]++,pe.push(m)},me=m=>{h[m]--,pe.pop()},C=m=>{if(c.type==="globstar"){let H=h.braces>0&&(m.type==="comma"||m.type==="brace"),_=m.extglob===!0||N.length&&(m.type==="pipe"||m.type==="paren");m.type!=="slash"&&m.type!=="paren"&&!H&&!_&&(h.output=h.output.slice(0,-c.output.length),c.type="star",c.value="*",c.output=G,h.output+=c.output)}if(N.length&&m.type!=="paren"&&(N[N.length-1].inner+=m.value),(m.value||m.output)&&Ve(m),c&&c.type==="text"&&m.type==="text"){c.value+=m.value,c.output=(c.output||"")+m.value;return}m.prev=c,o.push(m),c=m},Xe=(m,H)=>{let _={...f[H],conditions:1,inner:""};_.prev=c,_.parens=h.parens,_.output=h.output;let P=(r.capture?"(":"")+_.open;Ke("parens"),C({type:m,value:H,output:h.output?"":S}),C({type:"paren",extglob:!0,value:ee(),output:P}),N.push(_)},ta=m=>{let H=m.close+(r.capture?")":""),_;if(m.type==="negate"){let P=G;if(m.inner&&m.inner.length>1&&m.inner.includes("/")&&(P=x(r)),(P!==G||W()||/^\)+$/.test(te()))&&(H=m.close=`)$))${P}`),m.inner.includes("*")&&(_=te())&&/^\.[^\\/.]+$/.test(_)){let F=Vt(_,{...t,fastpaths:!1}).output;H=m.close=`)${F})${P})`}m.prev.type==="bos"&&(h.negatedExtglob=!0)}C({type:"paren",extglob:!0,value:l,output:H}),me("parens")};if(r.fastpaths!==!1&&!/(^[*!]|[/()[\]{}"])/.test(e)){let m=!1,H=e.replace(Bu,(_,P,F,V,B,Ot)=>V==="\\"?(m=!0,_):V==="?"?P?P+V+(B?I.repeat(B.length):""):Ot===0?L+(B?I.repeat(B.length):""):I.repeat(F.length):V==="."?g.repeat(F.length):V==="*"?P?P+V+(B?G:""):G:P?_:`\\${_}`);return m===!0&&(r.unescape===!0?H=H.replace(/\\/g,""):H=H.replace(/\\+/g,_=>_.length%2===0?"\\\\":_?"\\":"")),H===e&&r.contains===!0?(h.output=e,h):(h.output=Y.wrapOutput(H,h,t),h)}for(;!W();){if(l=ee(),l==="\0")continue;if(l==="\\"){let _=O();if(_==="/"&&r.bash!==!0||_==="."||_===";")continue;if(!_){l+="\\",C({type:"text",value:l});continue}let P=/^\\+/.exec(te()),F=0;if(P&&P[0].length>2&&(F=P[0].length,h.index+=F,F%2!==0&&(l+="\\")),r.unescape===!0?l=ee():l+=ee(),h.brackets===0){C({type:"text",value:l});continue}}if(h.brackets>0&&(l!=="]"||c.value==="["||c.value==="[^")){if(r.posix!==!1&&l===":"){let _=c.value.slice(1);if(_.includes("[")&&(c.posix=!0,_.includes(":"))){let P=c.value.lastIndexOf("["),F=c.value.slice(0,P),V=c.value.slice(P+2),B=Fu[V];if(B){c.value=F+B,h.backtrack=!0,ee(),!i.output&&o.indexOf(c)===1&&(i.output=S);continue}}}(l==="["&&O()!==":"||l==="-"&&O()==="]")&&(l=`\\${l}`),l==="]"&&(c.value==="["||c.value==="[^")&&(l=`\\${l}`),r.posix===!0&&l==="!"&&c.value==="["&&(l="^"),c.value+=l,Ve({value:l});continue}if(h.quotes===1&&l!=='"'){l=Y.escapeRegex(l),c.value+=l,Ve({value:l});continue}if(l==='"'){h.quotes=h.quotes===1?0:1,r.keepQuotes===!0&&C({type:"text",value:l});continue}if(l==="("){Ke("parens"),C({type:"paren",value:l});continue}if(l===")"){if(h.parens===0&&r.strictBrackets===!0)throw new SyntaxError(Oe("opening","("));let _=N[N.length-1];if(_&&h.parens===_.parens+1){ta(N.pop());continue}C({type:"paren",value:l,output:h.parens?")":"\\)"}),me("parens");continue}if(l==="["){if(r.nobracket===!0||!te().includes("]")){if(r.nobracket!==!0&&r.strictBrackets===!0)throw new SyntaxError(Oe("closing","]"));l=`\\${l}`}else Ke("brackets");C({type:"bracket",value:l});continue}if(l==="]"){if(r.nobracket===!0||c&&c.type==="bracket"&&c.value.length===1){C({type:"text",value:l,output:`\\${l}`});continue}if(h.brackets===0){if(r.strictBrackets===!0)throw new SyntaxError(Oe("opening","["));C({type:"text",value:l,output:`\\${l}`});continue}me("brackets");let _=c.value.slice(1);if(c.posix!==!0&&_[0]==="^"&&!_.includes("/")&&(l=`/${l}`),c.value+=l,Ve({value:l}),r.literalBrackets===!1||Y.hasRegexChars(_))continue;let P=Y.escapeRegex(c.value);if(h.output=h.output.slice(0,-c.value.length),r.literalBrackets===!0){h.output+=P,c.value=P;continue}c.value=`(${a}${P}|${c.value})`,h.output+=c.value;continue}if(l==="{"&&r.nobrace!==!0){Ke("braces");let _={type:"brace",value:l,output:"(",outputIndex:h.output.length,tokensIndex:h.tokens.length};$.push(_),C(_);continue}if(l==="}"){let _=$[$.length-1];if(r.nobrace===!0||!_){C({type:"text",value:l,output:l});continue}let P=")";if(_.dots===!0){let F=o.slice(),V=[];for(let B=F.length-1;B>=0&&(o.pop(),F[B].type!=="brace");B--)F[B].type!=="dots"&&V.unshift(F[B].value);P=Gu(V,r),h.backtrack=!0}if(_.comma!==!0&&_.dots!==!0){let F=h.output.slice(0,_.outputIndex),V=h.tokens.slice(_.tokensIndex);_.value=_.output="\\{",l=P="\\}",h.output=F;for(let B of V)h.output+=B.output||B.value}C({type:"brace",value:l,output:P}),me("braces"),$.pop();continue}if(l==="|"){N.length>0&&N[N.length-1].conditions++,C({type:"text",value:l});continue}if(l===","){let _=l,P=$[$.length-1];P&&pe[pe.length-1]==="braces"&&(P.comma=!0,_="|"),C({type:"comma",value:l,output:_});continue}if(l==="/"){if(c.type==="dot"&&h.index===h.start+1){h.start=h.index+1,h.consumed="",h.output="",o.pop(),c=i;continue}C({type:"slash",value:l,output:T});continue}if(l==="."){if(h.braces>0&&c.type==="dot"){c.value==="."&&(c.output=g);let _=$[$.length-1];c.type="dots",c.output+=l,c.value+=l,_.dots=!0;continue}if(h.braces+h.parens===0&&c.type!=="bos"&&c.type!=="slash"){C({type:"text",value:l,output:g});continue}C({type:"dot",value:l,output:g});continue}if(l==="?"){if(!(c&&c.value==="(")&&r.noextglob!==!0&&O()==="("&&O(2)!=="?"){Xe("qmark",l);continue}if(c&&c.type==="paren"){let P=O(),F=l;if(P==="<"&&!Y.supportsLookbehinds())throw new Error("Node.js v10 or higher is required for regex lookbehinds");(c.value==="("&&!/[!=<:]/.test(P)||P==="<"&&!/<([!=]|\w+>)/.test(te()))&&(F=`\\${l}`),C({type:"text",value:l,output:F});continue}if(r.dot!==!0&&(c.type==="slash"||c.type==="bos")){C({type:"qmark",value:l,output:Z});continue}C({type:"qmark",value:l,output:I});continue}if(l==="!"){if(r.noextglob!==!0&&O()==="("&&(O(2)!=="?"||!/[!=<:]/.test(O(3)))){Xe("negate",l);continue}if(r.nonegate!==!0&&h.index===0){ea();continue}}if(l==="+"){if(r.noextglob!==!0&&O()==="("&&O(2)!=="?"){Xe("plus",l);continue}if(c&&c.value==="("||r.regex===!1){C({type:"plus",value:l,output:p});continue}if(c&&(c.type==="bracket"||c.type==="paren"||c.type==="brace")||h.parens>0){C({type:"plus",value:l});continue}C({type:"plus",value:p});continue}if(l==="@"){if(r.noextglob!==!0&&O()==="("&&O(2)!=="?"){C({type:"at",extglob:!0,value:l,output:""});continue}C({type:"text",value:l});continue}if(l!=="*"){(l==="$"||l==="^")&&(l=`\\${l}`);let _=qu.exec(te());_&&(l+=_[0],h.index+=_[0].length),C({type:"text",value:l});continue}if(c&&(c.type==="globstar"||c.star===!0)){c.type="star",c.star=!0,c.value+=l,c.output=G,h.backtrack=!0,h.globstar=!0,X(l);continue}let m=te();if(r.noextglob!==!0&&/^\([^?]/.test(m)){Xe("star",l);continue}if(c.type==="star"){if(r.noglobstar===!0){X(l);continue}let _=c.prev,P=_.prev,F=_.type==="slash"||_.type==="bos",V=P&&(P.type==="star"||P.type==="globstar");if(r.bash===!0&&(!F||m[0]&&m[0]!=="/")){C({type:"star",value:l,output:""});continue}let B=h.braces>0&&(_.type==="comma"||_.type==="brace"),Ot=N.length&&(_.type==="pipe"||_.type==="paren");if(!F&&_.type!=="paren"&&!B&&!Ot){C({type:"star",value:l,output:""});continue}for(;m.slice(0,3)==="/**";){let Qe=e[h.index+4];if(Qe&&Qe!=="/")break;m=m.slice(3),X("/**",3)}if(_.type==="bos"&&W()){c.type="globstar",c.value+=l,c.output=x(r),h.output=c.output,h.globstar=!0,X(l);continue}if(_.type==="slash"&&_.prev.type!=="bos"&&!V&&W()){h.output=h.output.slice(0,-(_.output+c.output).length),_.output=`(?:${_.output}`,c.type="globstar",c.output=x(r)+(r.strictSlashes?")":"|$)"),c.value+=l,h.globstar=!0,h.output+=_.output+c.output,X(l);continue}if(_.type==="slash"&&_.prev.type!=="bos"&&m[0]==="/"){let Qe=m[1]!==void 0?"|$":"";h.output=h.output.slice(0,-(_.output+c.output).length),_.output=`(?:${_.output}`,c.type="globstar",c.output=`${x(r)}${T}|${T}${Qe})`,c.value+=l,h.output+=_.output+c.output,h.globstar=!0,X(l+ee()),C({type:"slash",value:"/",output:""});continue}if(_.type==="bos"&&m[0]==="/"){c.type="globstar",c.value+=l,c.output=`(?:^|${T}|${x(r)}${T})`,h.output=c.output,h.globstar=!0,X(l+ee()),C({type:"slash",value:"/",output:""});continue}h.output=h.output.slice(0,-c.output.length),c.type="globstar",c.output=x(r),c.value+=l,h.output+=c.output,h.globstar=!0,X(l);continue}let H={type:"star",value:l,output:G};if(r.bash===!0){H.output=".*?",(c.type==="bos"||c.type==="slash")&&(H.output=A+H.output),C(H);continue}if(c&&(c.type==="bracket"||c.type==="paren")&&r.regex===!0){H.output=l,C(H);continue}(h.index===h.start||c.type==="slash"||c.type==="dot")&&(c.type==="dot"?(h.output+=v,c.output+=v):r.dot===!0?(h.output+=k,c.output+=k):(h.output+=A,c.output+=A),O()!=="*"&&(h.output+=S,c.output+=S)),C(H)}for(;h.brackets>0;){if(r.strictBrackets===!0)throw new SyntaxError(Oe("closing","]"));h.output=Y.escapeLast(h.output,"["),me("brackets")}for(;h.parens>0;){if(r.strictBrackets===!0)throw new SyntaxError(Oe("closing",")"));h.output=Y.escapeLast(h.output,"("),me("parens")}for(;h.braces>0;){if(r.strictBrackets===!0)throw new SyntaxError(Oe("closing","}"));h.output=Y.escapeLast(h.output,"{"),me("braces")}if(r.strictSlashes!==!0&&(c.type==="star"||c.type==="bracket")&&C({type:"maybe_slash",value:"",output:`${T}?`}),h.backtrack===!0){h.output="";for(let m of h.tokens)h.output+=m.output!=null?m.output:m.value,m.suffix&&(h.output+=m.suffix)}return h};Vt.fastpaths=(e,t)=>{let r={...t},n=typeof r.maxLength=="number"?Math.min(st,r.maxLength):st,s=e.length;if(s>n)throw new SyntaxError(`Input length: ${s}, exceeds maximum allowed length: ${n}`);e=qs[e]||e;let i=Y.isWindows(t),{DOT_LITERAL:o,SLASH_LITERAL:a,ONE_CHAR:u,DOTS_SLASH:d,NO_DOT:f,NO_DOTS:g,NO_DOTS_SLASH:p,STAR:T,START_ANCHOR:S}=nt.globChars(i),E=r.dot?g:f,b=r.dot?p:f,v=r.capture?"":"?:",k={negated:!1,prefix:""},I=r.bash===!0?".*?":T;r.capture&&(I=`(${I})`);let Z=A=>A.noglobstar===!0?I:`(${v}(?:(?!${S}${A.dot?d:o}).)*?)`,w=A=>{switch(A){case"*":return`${E}${u}${I}`;case".*":return`${o}${u}${I}`;case"*.*":return`${E}${I}${o}${u}${I}`;case"*/*":return`${E}${I}${a}${u}${b}${I}`;case"**":return E+Z(r);case"**/*":return`(?:${E}${Z(r)}${a})?${b}${u}${I}`;case"**/*.*":return`(?:${E}${Z(r)}${a})?${b}${I}${o}${u}${I}`;case"**/.*":return`(?:${E}${Z(r)}${a})?${o}${u}${I}`;default:{let L=/^(.*?)\.(\w+)$/.exec(A);if(!L)return;let G=w(L[1]);return G?G+o+L[2]:void 0}}},D=Y.removePrefix(e,k),x=w(D);return x&&r.strictSlashes!==!0&&(x+=`${a}?`),x};Bs.exports=Vt});var Us=y((dp,js)=>{"use strict";var ju=__nccwpck_require__(17),Uu=Fs(),Kt=Gs(),Xt=Be(),Wu=qe(),Vu=e=>e&&typeof e=="object"&&!Array.isArray(e),q=(e,t,r=!1)=>{if(Array.isArray(e)){let f=e.map(p=>q(p,t,r));return p=>{for(let T of f){let S=T(p);if(S)return S}return!1}}let n=Vu(e)&&e.tokens&&e.input;if(e===""||typeof e!="string"&&!n)throw new TypeError("Expected pattern to be a non-empty string");let s=t||{},i=Xt.isWindows(t),o=n?q.compileRe(e,t):q.makeRe(e,t,!1,!0),a=o.state;delete o.state;let u=()=>!1;if(s.ignore){let f={...t,ignore:null,onMatch:null,onResult:null};u=q(s.ignore,f,r)}let d=(f,g=!1)=>{let{isMatch:p,match:T,output:S}=q.test(f,o,t,{glob:e,posix:i}),E={glob:e,state:a,regex:o,posix:i,input:f,output:S,match:T,isMatch:p};return typeof s.onResult=="function"&&s.onResult(E),p===!1?(E.isMatch=!1,g?E:!1):u(f)?(typeof s.onIgnore=="function"&&s.onIgnore(E),E.isMatch=!1,g?E:!1):(typeof s.onMatch=="function"&&s.onMatch(E),g?E:!0)};return r&&(d.state=a),d};q.test=(e,t,r,{glob:n,posix:s}={})=>{if(typeof e!="string")throw new TypeError("Expected input to be a string");if(e==="")return{isMatch:!1,output:""};let i=r||{},o=i.format||(s?Xt.toPosixSlashes:null),a=e===n,u=a&&o?o(e):e;return a===!1&&(u=o?o(e):e,a=u===n),(a===!1||i.capture===!0)&&(i.matchBase===!0||i.basename===!0?a=q.matchBase(e,t,r,s):a=t.exec(u)),{isMatch:Boolean(a),match:a,output:u}};q.matchBase=(e,t,r,n=Xt.isWindows(r))=>(t instanceof RegExp?t:q.makeRe(t,r)).test(ju.basename(e));q.isMatch=(e,t,r)=>q(t,r)(e);q.parse=(e,t)=>Array.isArray(e)?e.map(r=>q.parse(r,t)):Kt(e,{...t,fastpaths:!1});q.scan=(e,t)=>Uu(e,t);q.compileRe=(e,t,r=!1,n=!1)=>{if(r===!0)return e.output;let s=t||{},i=s.contains?"":"^",o=s.contains?"":"$",a=`${i}(?:${e.output})${o}`;e&&e.negated===!0&&(a=`^(?!${a}).*$`);let u=q.toRegex(a,t);return n===!0&&(u.state=e),u};q.makeRe=(e,t={},r=!1,n=!1)=>{if(!e||typeof e!="string")throw new TypeError("Expected a non-empty string");let s={negated:!1,fastpaths:!0};return t.fastpaths!==!1&&(e[0]==="."||e[0]==="*")&&(s.output=Kt.fastpaths(e,t)),s.output||(s=Kt(e,t)),q.compileRe(s,t,r,n)};q.toRegex=(e,t)=>{try{let r=t||{};return new RegExp(e,r.flags||(r.nocase?"i":""))}catch(r){if(t&&t.debug===!0)throw r;return/$^/}};q.constants=Wu;js.exports=q});var Vs=y((_p,Ws)=>{"use strict";Ws.exports=Us()});var Zs=y((gp,Ys)=>{"use strict";var Xs=__nccwpck_require__(837),Qs=Ps(),ie=Vs(),Qt=Be(),Ks=e=>e===""||e==="./",M=(e,t,r)=>{t=[].concat(t),e=[].concat(e);let n=new Set,s=new Set,i=new Set,o=0,a=f=>{i.add(f.output),r&&r.onResult&&r.onResult(f)};for(let f=0;f<t.length;f++){let g=ie(String(t[f]),{...r,onResult:a},!0),p=g.state.negated||g.state.negatedExtglob;p&&o++;for(let T of e){let S=g(T,!0);(p?!S.isMatch:S.isMatch)&&(p?n.add(S.output):(n.delete(S.output),s.add(S.output)))}}let d=(o===t.length?[...i]:[...s]).filter(f=>!n.has(f));if(r&&d.length===0){if(r.failglob===!0)throw new Error(`No matches found for "${t.join(", ")}"`);if(r.nonull===!0||r.nullglob===!0)return r.unescape?t.map(f=>f.replace(/\\/g,"")):t}return d};M.match=M;M.matcher=(e,t)=>ie(e,t);M.isMatch=(e,t,r)=>ie(t,r)(e);M.any=M.isMatch;M.not=(e,t,r={})=>{t=[].concat(t).map(String);let n=new Set,s=[],i=a=>{r.onResult&&r.onResult(a),s.push(a.output)},o=new Set(M(e,t,{...r,onResult:i}));for(let a of s)o.has(a)||n.add(a);return[...n]};M.contains=(e,t,r)=>{if(typeof e!="string")throw new TypeError(`Expected a string: "${Xs.inspect(e)}"`);if(Array.isArray(t))return t.some(n=>M.contains(e,n,r));if(typeof t=="string"){if(Ks(e)||Ks(t))return!1;if(e.includes(t)||e.startsWith("./")&&e.slice(2).includes(t))return!0}return M.isMatch(e,t,{...r,contains:!0})};M.matchKeys=(e,t,r)=>{if(!Qt.isObject(e))throw new TypeError("Expected the first argument to be an object");let n=M(Object.keys(e),t,r),s={};for(let i of n)s[i]=e[i];return s};M.some=(e,t,r)=>{let n=[].concat(e);for(let s of[].concat(t)){let i=ie(String(s),r);if(n.some(o=>i(o)))return!0}return!1};M.every=(e,t,r)=>{let n=[].concat(e);for(let s of[].concat(t)){let i=ie(String(s),r);if(!n.every(o=>i(o)))return!1}return!0};M.all=(e,t,r)=>{if(typeof e!="string")throw new TypeError(`Expected a string: "${Xs.inspect(e)}"`);return[].concat(t).every(n=>ie(n,r)(e))};M.capture=(e,t,r)=>{let n=Qt.isWindows(r),i=ie.makeRe(String(e),{...r,capture:!0}).exec(n?Qt.toPosixSlashes(t):t);if(i)return i.slice(1).map(o=>o===void 0?"":o)};M.makeRe=(...e)=>ie.makeRe(...e);M.scan=(...e)=>ie.scan(...e);M.parse=(e,t)=>{let r=[];for(let n of[].concat(e||[]))for(let s of Qs(String(n),t))r.push(ie.parse(s,t));return r};M.braces=(e,t)=>{if(typeof e!="string")throw new TypeError("Expected a string");return t&&t.nobrace===!0||!/\{.*\}/.test(e)?[e]:Qs(e,t)};M.braceExpand=(e,t)=>{if(typeof e!="string")throw new TypeError("Expected a string");return M.braces(e,{...t,expand:!0})};Ys.exports=M});var ii=y(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});R.matchAny=R.convertPatternsToRe=R.makeRe=R.getPatternParts=R.expandBraceExpansion=R.expandPatternsWithBraceExpansion=R.isAffectDepthOfReadingPattern=R.endsWithSlashGlobStar=R.hasGlobStar=R.getBaseDirectory=R.isPatternRelatedToParentDirectory=R.getPatternsOutsideCurrentDirectory=R.getPatternsInsideCurrentDirectory=R.getPositivePatterns=R.getNegativePatterns=R.isPositivePattern=R.isNegativePattern=R.convertToNegativePattern=R.convertToPositivePattern=R.isDynamicPattern=R.isStaticPattern=void 0;var Ku=__nccwpck_require__(17),Xu=jn(),Yt=Zs(),zs="**",Qu="\\",Yu=/[*?]|^!/,Zu=/\[[^[]*]/,zu=/(?:^|[^!*+?@])\([^(]*\|[^|]*\)/,Ju=/[!*+?@]\([^(]*\)/,ec=/,|\.\./;function Js(e,t={}){return!ei(e,t)}R.isStaticPattern=Js;function ei(e,t={}){return e===""?!1:!!(t.caseSensitiveMatch===!1||e.includes(Qu)||Yu.test(e)||Zu.test(e)||zu.test(e)||t.extglob!==!1&&Ju.test(e)||t.braceExpansion!==!1&&tc(e))}R.isDynamicPattern=ei;function tc(e){let t=e.indexOf("{");if(t===-1)return!1;let r=e.indexOf("}",t+1);if(r===-1)return!1;let n=e.slice(t,r);return ec.test(n)}function rc(e){return it(e)?e.slice(1):e}R.convertToPositivePattern=rc;function nc(e){return"!"+e}R.convertToNegativePattern=nc;function it(e){return e.startsWith("!")&&e[1]!=="("}R.isNegativePattern=it;function ti(e){return!it(e)}R.isPositivePattern=ti;function sc(e){return e.filter(it)}R.getNegativePatterns=sc;function ic(e){return e.filter(ti)}R.getPositivePatterns=ic;function oc(e){return e.filter(t=>!Zt(t))}R.getPatternsInsideCurrentDirectory=oc;function ac(e){return e.filter(Zt)}R.getPatternsOutsideCurrentDirectory=ac;function Zt(e){return e.startsWith("..")||e.startsWith("./..")}R.isPatternRelatedToParentDirectory=Zt;function uc(e){return Xu(e,{flipBackslashes:!1})}R.getBaseDirectory=uc;function cc(e){return e.includes(zs)}R.hasGlobStar=cc;function ri(e){return e.endsWith("/"+zs)}R.endsWithSlashGlobStar=ri;function lc(e){let t=Ku.basename(e);return ri(e)||Js(t)}R.isAffectDepthOfReadingPattern=lc;function fc(e){return e.reduce((t,r)=>t.concat(ni(r)),[])}R.expandPatternsWithBraceExpansion=fc;function ni(e){return Yt.braces(e,{expand:!0,nodupes:!0})}R.expandBraceExpansion=ni;function pc(e,t){let{parts:r}=Yt.scan(e,Object.assign(Object.assign({},t),{parts:!0}));return r.length===0&&(r=[e]),r[0].startsWith("/")&&(r[0]=r[0].slice(1),r.unshift("")),r}R.getPatternParts=pc;function si(e,t){return Yt.makeRe(e,t)}R.makeRe=si;function hc(e,t){return e.map(r=>si(r,t))}R.convertPatternsToRe=hc;function dc(e,t){return t.some(r=>r.test(e))}R.matchAny=dc});var ai=y(ot=>{"use strict";Object.defineProperty(ot,"__esModule",{value:!0});ot.merge=void 0;var _c=Lt();function gc(e){let t=_c(e);return e.forEach(r=>{r.once("error",n=>t.emit("error",n))}),t.once("close",()=>oi(e)),t.once("end",()=>oi(e)),t}ot.merge=gc;function oi(e){e.forEach(t=>t.emit("close"))}});var ui=y(Le=>{"use strict";Object.defineProperty(Le,"__esModule",{value:!0});Le.isEmpty=Le.isString=void 0;function yc(e){return typeof e=="string"}Le.isString=yc;function Sc(e){return e===""}Le.isEmpty=Sc});var ce=y(j=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0});j.string=j.stream=j.pattern=j.path=j.fs=j.errno=j.array=void 0;var mc=$n();j.array=mc;var Ec=Hn();j.errno=Ec;var Ac=In();j.fs=Ac;var Rc=Dn();j.path=Rc;var bc=ii();j.pattern=bc;var vc=ai();j.stream=vc;var xc=ui();j.string=xc});var fi=y(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.convertPatternGroupToTask=U.convertPatternGroupsToTasks=U.groupPatternsByBaseDirectory=U.getNegativePatternsAsPositive=U.getPositivePatterns=U.convertPatternsToTasks=U.generate=void 0;var le=ce();function Pc(e,t){let r=ci(e),n=li(e,t.ignore),s=r.filter(u=>le.pattern.isStaticPattern(u,t)),i=r.filter(u=>le.pattern.isDynamicPattern(u,t)),o=zt(s,n,!1),a=zt(i,n,!0);return o.concat(a)}U.generate=Pc;function zt(e,t,r){let n=[],s=le.pattern.getPatternsOutsideCurrentDirectory(e),i=le.pattern.getPatternsInsideCurrentDirectory(e),o=Jt(s),a=Jt(i);return n.push(...er(o,t,r)),"."in a?n.push(tr(".",i,t,r)):n.push(...er(a,t,r)),n}U.convertPatternsToTasks=zt;function ci(e){return le.pattern.getPositivePatterns(e)}U.getPositivePatterns=ci;function li(e,t){return le.pattern.getNegativePatterns(e).concat(t).map(le.pattern.convertToPositivePattern)}U.getNegativePatternsAsPositive=li;function Jt(e){let t={};return e.reduce((r,n)=>{let s=le.pattern.getBaseDirectory(n);return s in r?r[s].push(n):r[s]=[n],r},t)}U.groupPatternsByBaseDirectory=Jt;function er(e,t,r){return Object.keys(e).map(n=>tr(n,e[n],t,r))}U.convertPatternGroupsToTasks=er;function tr(e,t,r,n){return{dynamic:n,positive:t,negative:r,base:e,patterns:[].concat(t,r.map(le.pattern.convertToNegativePattern))}}U.convertPatternGroupToTask=tr});var hi=y(ke=>{"use strict";Object.defineProperty(ke,"__esModule",{value:!0});ke.removeDuplicateSlashes=ke.transform=void 0;var wc=/(?!^)\/{2,}/g;function Cc(e){return e.map(t=>pi(t))}ke.transform=Cc;function pi(e){return e.replace(wc,"/")}ke.removeDuplicateSlashes=pi});var _i=y(at=>{"use strict";Object.defineProperty(at,"__esModule",{value:!0});at.read=void 0;function Tc(e,t,r){t.fs.lstat(e,(n,s)=>{if(n!==null){di(r,n);return}if(!s.isSymbolicLink()||!t.followSymbolicLink){rr(r,s);return}t.fs.stat(e,(i,o)=>{if(i!==null){if(t.throwErrorOnBrokenSymbolicLink){di(r,i);return}rr(r,s);return}t.markSymbolicLink&&(o.isSymbolicLink=()=>!0),rr(r,o)})})}at.read=Tc;function di(e,t){e(t)}function rr(e,t){e(null,t)}});var gi=y(ut=>{"use strict";Object.defineProperty(ut,"__esModule",{value:!0});ut.read=void 0;function Oc(e,t){let r=t.fs.lstatSync(e);if(!r.isSymbolicLink()||!t.followSymbolicLink)return r;try{let n=t.fs.statSync(e);return t.markSymbolicLink&&(n.isSymbolicLink=()=>!0),n}catch(n){if(!t.throwErrorOnBrokenSymbolicLink)return r;throw n}}ut.read=Oc});var yi=y(he=>{"use strict";Object.defineProperty(he,"__esModule",{value:!0});he.createFileSystemAdapter=he.FILE_SYSTEM_ADAPTER=void 0;var ct=__nccwpck_require__(147);he.FILE_SYSTEM_ADAPTER={lstat:ct.lstat,stat:ct.stat,lstatSync:ct.lstatSync,statSync:ct.statSync};function Lc(e){return e===void 0?he.FILE_SYSTEM_ADAPTER:Object.assign(Object.assign({},he.FILE_SYSTEM_ADAPTER),e)}he.createFileSystemAdapter=Lc});var Si=y(sr=>{"use strict";Object.defineProperty(sr,"__esModule",{value:!0});var kc=yi(),nr=class{constructor(t={}){this._options=t,this.followSymbolicLink=this._getValue(this._options.followSymbolicLink,!0),this.fs=kc.createFileSystemAdapter(this._options.fs),this.markSymbolicLink=this._getValue(this._options.markSymbolicLink,!1),this.throwErrorOnBrokenSymbolicLink=this._getValue(this._options.throwErrorOnBrokenSymbolicLink,!0)}_getValue(t,r){return t??r}};sr.default=nr});var Re=y(de=>{"use strict";Object.defineProperty(de,"__esModule",{value:!0});de.statSync=de.stat=de.Settings=void 0;var mi=_i(),$c=gi(),ir=Si();de.Settings=ir.default;function Hc(e,t,r){if(typeof t=="function"){mi.read(e,or(),t);return}mi.read(e,or(t),r)}de.stat=Hc;function Ic(e,t){let r=or(t);return $c.read(e,r)}de.statSync=Ic;function or(e={}){return e instanceof ir.default?e:new ir.default(e)}});var Ri=y((Cp,Ai)=>{var Ei;Ai.exports=typeof queueMicrotask=="function"?queueMicrotask.bind(typeof window<"u"?window:global):e=>(Ei||(Ei=Promise.resolve())).then(e).catch(t=>setTimeout(()=>{throw t},0))});var vi=y((Tp,bi)=>{bi.exports=Nc;var Dc=Ri();function Nc(e,t){let r,n,s,i=!0;Array.isArray(e)?(r=[],n=e.length):(s=Object.keys(e),r={},n=s.length);function o(u){function d(){t&&t(u,r),t=null}i?Dc(d):d()}function a(u,d,f){r[u]=f,(--n===0||d)&&o(d)}n?s?s.forEach(function(u){e[u](function(d,f){a(u,d,f)})}):e.forEach(function(u,d){u(function(f,g){a(d,f,g)})}):o(null),i=!1}});var ar=y(ft=>{"use strict";Object.defineProperty(ft,"__esModule",{value:!0});ft.IS_SUPPORT_READDIR_WITH_FILE_TYPES=void 0;var lt=process.versions.node.split(".");if(lt[0]===void 0||lt[1]===void 0)throw new Error(`Unexpected behavior. The 'process.versions.node' variable has invalid value: ${process.versions.node}`);var xi=Number.parseInt(lt[0],10),Mc=Number.parseInt(lt[1],10),Pi=10,Fc=10,qc=xi>Pi,Bc=xi===Pi&&Mc>=Fc;ft.IS_SUPPORT_READDIR_WITH_FILE_TYPES=qc||Bc});var wi=y(pt=>{"use strict";Object.defineProperty(pt,"__esModule",{value:!0});pt.createDirentFromStats=void 0;var ur=class{constructor(t,r){this.name=t,this.isBlockDevice=r.isBlockDevice.bind(r),this.isCharacterDevice=r.isCharacterDevice.bind(r),this.isDirectory=r.isDirectory.bind(r),this.isFIFO=r.isFIFO.bind(r),this.isFile=r.isFile.bind(r),this.isSocket=r.isSocket.bind(r),this.isSymbolicLink=r.isSymbolicLink.bind(r)}};function Gc(e,t){return new ur(e,t)}pt.createDirentFromStats=Gc});var cr=y(ht=>{"use strict";Object.defineProperty(ht,"__esModule",{value:!0});ht.fs=void 0;var jc=wi();ht.fs=jc});var lr=y(dt=>{"use strict";Object.defineProperty(dt,"__esModule",{value:!0});dt.joinPathSegments=void 0;function Uc(e,t,r){return e.endsWith(r)?e+t:e+r+t}dt.joinPathSegments=Uc});var $i=y(_e=>{"use strict";Object.defineProperty(_e,"__esModule",{value:!0});_e.readdir=_e.readdirWithFileTypes=_e.read=void 0;var Wc=Re(),Ci=vi(),Vc=ar(),Ti=cr(),Oi=lr();function Kc(e,t,r){if(!t.stats&&Vc.IS_SUPPORT_READDIR_WITH_FILE_TYPES){Li(e,t,r);return}ki(e,t,r)}_e.read=Kc;function Li(e,t,r){t.fs.readdir(e,{withFileTypes:!0},(n,s)=>{if(n!==null){_t(r,n);return}let i=s.map(a=>({dirent:a,name:a.name,path:Oi.joinPathSegments(e,a.name,t.pathSegmentSeparator)}));if(!t.followSymbolicLinks){fr(r,i);return}let o=i.map(a=>Xc(a,t));Ci(o,(a,u)=>{if(a!==null){_t(r,a);return}fr(r,u)})})}_e.readdirWithFileTypes=Li;function Xc(e,t){return r=>{if(!e.dirent.isSymbolicLink()){r(null,e);return}t.fs.stat(e.path,(n,s)=>{if(n!==null){if(t.throwErrorOnBrokenSymbolicLink){r(n);return}r(null,e);return}e.dirent=Ti.fs.createDirentFromStats(e.name,s),r(null,e)})}}function ki(e,t,r){t.fs.readdir(e,(n,s)=>{if(n!==null){_t(r,n);return}let i=s.map(o=>{let a=Oi.joinPathSegments(e,o,t.pathSegmentSeparator);return u=>{Wc.stat(a,t.fsStatSettings,(d,f)=>{if(d!==null){u(d);return}let g={name:o,path:a,dirent:Ti.fs.createDirentFromStats(o,f)};t.stats&&(g.stats=f),u(null,g)})}});Ci(i,(o,a)=>{if(o!==null){_t(r,o);return}fr(r,a)})})}_e.readdir=ki;function _t(e,t){e(t)}function fr(e,t){e(null,t)}});var Mi=y(ge=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0});ge.readdir=ge.readdirWithFileTypes=ge.read=void 0;var Qc=Re(),Yc=ar(),Hi=cr(),Ii=lr();function Zc(e,t){return!t.stats&&Yc.IS_SUPPORT_READDIR_WITH_FILE_TYPES?Di(e,t):Ni(e,t)}ge.read=Zc;function Di(e,t){return t.fs.readdirSync(e,{withFileTypes:!0}).map(n=>{let s={dirent:n,name:n.name,path:Ii.joinPathSegments(e,n.name,t.pathSegmentSeparator)};if(s.dirent.isSymbolicLink()&&t.followSymbolicLinks)try{let i=t.fs.statSync(s.path);s.dirent=Hi.fs.createDirentFromStats(s.name,i)}catch(i){if(t.throwErrorOnBrokenSymbolicLink)throw i}return s})}ge.readdirWithFileTypes=Di;function Ni(e,t){return t.fs.readdirSync(e).map(n=>{let s=Ii.joinPathSegments(e,n,t.pathSegmentSeparator),i=Qc.statSync(s,t.fsStatSettings),o={name:n,path:s,dirent:Hi.fs.createDirentFromStats(n,i)};return t.stats&&(o.stats=i),o})}ge.readdir=Ni});var Fi=y(ye=>{"use strict";Object.defineProperty(ye,"__esModule",{value:!0});ye.createFileSystemAdapter=ye.FILE_SYSTEM_ADAPTER=void 0;var $e=__nccwpck_require__(147);ye.FILE_SYSTEM_ADAPTER={lstat:$e.lstat,stat:$e.stat,lstatSync:$e.lstatSync,statSync:$e.statSync,readdir:$e.readdir,readdirSync:$e.readdirSync};function zc(e){return e===void 0?ye.FILE_SYSTEM_ADAPTER:Object.assign(Object.assign({},ye.FILE_SYSTEM_ADAPTER),e)}ye.createFileSystemAdapter=zc});var qi=y(hr=>{"use strict";Object.defineProperty(hr,"__esModule",{value:!0});var Jc=__nccwpck_require__(17),el=Re(),tl=Fi(),pr=class{constructor(t={}){this._options=t,this.followSymbolicLinks=this._getValue(this._options.followSymbolicLinks,!1),this.fs=tl.createFileSystemAdapter(this._options.fs),this.pathSegmentSeparator=this._getValue(this._options.pathSegmentSeparator,Jc.sep),this.stats=this._getValue(this._options.stats,!1),this.throwErrorOnBrokenSymbolicLink=this._getValue(this._options.throwErrorOnBrokenSymbolicLink,!0),this.fsStatSettings=new el.Settings({followSymbolicLink:this.followSymbolicLinks,fs:this.fs,throwErrorOnBrokenSymbolicLink:this.throwErrorOnBrokenSymbolicLink})}_getValue(t,r){return t??r}};hr.default=pr});var gt=y(Se=>{"use strict";Object.defineProperty(Se,"__esModule",{value:!0});Se.Settings=Se.scandirSync=Se.scandir=void 0;var Bi=$i(),rl=Mi(),dr=qi();Se.Settings=dr.default;function nl(e,t,r){if(typeof t=="function"){Bi.read(e,_r(),t);return}Bi.read(e,_r(t),r)}Se.scandir=nl;function sl(e,t){let r=_r(t);return rl.read(e,r)}Se.scandirSync=sl;function _r(e={}){return e instanceof dr.default?e:new dr.default(e)}});var ji=y((Fp,Gi)=>{"use strict";function il(e){var t=new e,r=t;function n(){var i=t;return i.next?t=i.next:(t=new e,r=t),i.next=null,i}function s(i){r.next=i,r=i}return{get:n,release:s}}Gi.exports=il});var Wi=y((qp,gr)=>{"use strict";var ol=ji();function Ui(e,t,r){if(typeof e=="function"&&(r=t,t=e,e=null),r<1)throw new Error("fastqueue concurrency must be greater than 1");var n=ol(al),s=null,i=null,o=0,a=null,u={push:E,drain:J,saturated:J,pause:f,paused:!1,concurrency:r,running:d,resume:T,idle:S,length:g,getQueue:p,unshift:b,empty:J,kill:k,killAndDrain:I,error:Z};return u;function d(){return o}function f(){u.paused=!0}function g(){for(var w=s,D=0;w;)w=w.next,D++;return D}function p(){for(var w=s,D=[];w;)D.push(w.value),w=w.next;return D}function T(){if(u.paused){u.paused=!1;for(var w=0;w<u.concurrency;w++)o++,v()}}function S(){return o===0&&u.length()===0}function E(w,D){var x=n.get();x.context=e,x.release=v,x.value=w,x.callback=D||J,x.errorHandler=a,o===u.concurrency||u.paused?i?(i.next=x,i=x):(s=x,i=x,u.saturated()):(o++,t.call(e,x.value,x.worked))}function b(w,D){var x=n.get();x.context=e,x.release=v,x.value=w,x.callback=D||J,o===u.concurrency||u.paused?s?(x.next=s,s=x):(s=x,i=x,u.saturated()):(o++,t.call(e,x.value,x.worked))}function v(w){w&&n.release(w);var D=s;D?u.paused?o--:(i===s&&(i=null),s=D.next,D.next=null,t.call(e,D.value,D.worked),i===null&&u.empty()):--o===0&&u.drain()}function k(){s=null,i=null,u.drain=J}function I(){s=null,i=null,u.drain(),u.drain=J}function Z(w){a=w}}function J(){}function al(){this.value=null,this.callback=J,this.next=null,this.release=J,this.context=null,this.errorHandler=null;var e=this;this.worked=function(r,n){var s=e.callback,i=e.errorHandler,o=e.value;e.value=null,e.callback=J,e.errorHandler&&i(r,o),s.call(e.context,r,n),e.release(e)}}function ul(e,t,r){typeof e=="function"&&(r=t,t=e,e=null);function n(f,g){t.call(this,f).then(function(p){g(null,p)},g)}var s=Ui(e,n,r),i=s.push,o=s.unshift;return s.push=a,s.unshift=u,s.drained=d,s;function a(f){var g=new Promise(function(p,T){i(f,function(S,E){if(S){T(S);return}p(E)})});return g.catch(J),g}function u(f){var g=new Promise(function(p,T){o(f,function(S,E){if(S){T(S);return}p(E)})});return g.catch(J),g}function d(){if(s.idle())return new Promise(function(p){p()});var f=s.drain,g=new Promise(function(p){s.drain=function(){f(),p()}});return g}}gr.exports=Ui;gr.exports.promise=ul});var yt=y(oe=>{"use strict";Object.defineProperty(oe,"__esModule",{value:!0});oe.joinPathSegments=oe.replacePathSegmentSeparator=oe.isAppliedFilter=oe.isFatalError=void 0;function cl(e,t){return e.errorFilter===null?!0:!e.errorFilter(t)}oe.isFatalError=cl;function ll(e,t){return e===null||e(t)}oe.isAppliedFilter=ll;function fl(e,t){return e.split(/[/\\]/).join(t)}oe.replacePathSegmentSeparator=fl;function pl(e,t,r){return e===""?t:e.endsWith(r)?e+t:e+r+t}oe.joinPathSegments=pl});var mr=y(Sr=>{"use strict";Object.defineProperty(Sr,"__esModule",{value:!0});var hl=yt(),yr=class{constructor(t,r){this._root=t,this._settings=r,this._root=hl.replacePathSegmentSeparator(t,r.pathSegmentSeparator)}};Sr.default=yr});var Rr=y(Ar=>{"use strict";Object.defineProperty(Ar,"__esModule",{value:!0});var dl=__nccwpck_require__(361),_l=gt(),gl=Wi(),St=yt(),yl=mr(),Er=class extends yl.default{constructor(t,r){super(t,r),this._settings=r,this._scandir=_l.scandir,this._emitter=new dl.EventEmitter,this._queue=gl(this._worker.bind(this),this._settings.concurrency),this._isFatalError=!1,this._isDestroyed=!1,this._queue.drain=()=>{this._isFatalError||this._emitter.emit("end")}}read(){return this._isFatalError=!1,this._isDestroyed=!1,setImmediate(()=>{this._pushToQueue(this._root,this._settings.basePath)}),this._emitter}get isDestroyed(){return this._isDestroyed}destroy(){if(this._isDestroyed)throw new Error("The reader is already destroyed");this._isDestroyed=!0,this._queue.killAndDrain()}onEntry(t){this._emitter.on("entry",t)}onError(t){this._emitter.once("error",t)}onEnd(t){this._emitter.once("end",t)}_pushToQueue(t,r){let n={directory:t,base:r};this._queue.push(n,s=>{s!==null&&this._handleError(s)})}_worker(t,r){this._scandir(t.directory,this._settings.fsScandirSettings,(n,s)=>{if(n!==null){r(n,void 0);return}for(let i of s)this._handleEntry(i,t.base);r(null,void 0)})}_handleError(t){this._isDestroyed||!St.isFatalError(this._settings,t)||(this._isFatalError=!0,this._isDestroyed=!0,this._emitter.emit("error",t))}_handleEntry(t,r){if(this._isDestroyed||this._isFatalError)return;let n=t.path;r!==void 0&&(t.path=St.joinPathSegments(r,t.name,this._settings.pathSegmentSeparator)),St.isAppliedFilter(this._settings.entryFilter,t)&&this._emitEntry(t),t.dirent.isDirectory()&&St.isAppliedFilter(this._settings.deepFilter,t)&&this._pushToQueue(n,r===void 0?void 0:t.path)}_emitEntry(t){this._emitter.emit("entry",t)}};Ar.default=Er});var Vi=y(vr=>{"use strict";Object.defineProperty(vr,"__esModule",{value:!0});var Sl=Rr(),br=class{constructor(t,r){this._root=t,this._settings=r,this._reader=new Sl.default(this._root,this._settings),this._storage=[]}read(t){this._reader.onError(r=>{ml(t,r)}),this._reader.onEntry(r=>{this._storage.push(r)}),this._reader.onEnd(()=>{El(t,this._storage)}),this._reader.read()}};vr.default=br;function ml(e,t){e(t)}function El(e,t){e(null,t)}});var Ki=y(Pr=>{"use strict";Object.defineProperty(Pr,"__esModule",{value:!0});var Al=__nccwpck_require__(781),Rl=Rr(),xr=class{constructor(t,r){this._root=t,this._settings=r,this._reader=new Rl.default(this._root,this._settings),this._stream=new Al.Readable({objectMode:!0,read:()=>{},destroy:()=>{this._reader.isDestroyed||this._reader.destroy()}})}read(){return this._reader.onError(t=>{this._stream.emit("error",t)}),this._reader.onEntry(t=>{this._stream.push(t)}),this._reader.onEnd(()=>{this._stream.push(null)}),this._reader.read(),this._stream}};Pr.default=xr});var Xi=y(Cr=>{"use strict";Object.defineProperty(Cr,"__esModule",{value:!0});var bl=gt(),mt=yt(),vl=mr(),wr=class extends vl.default{constructor(){super(...arguments),this._scandir=bl.scandirSync,this._storage=[],this._queue=new Set}read(){return this._pushToQueue(this._root,this._settings.basePath),this._handleQueue(),this._storage}_pushToQueue(t,r){this._queue.add({directory:t,base:r})}_handleQueue(){for(let t of this._queue.values())this._handleDirectory(t.directory,t.base)}_handleDirectory(t,r){try{let n=this._scandir(t,this._settings.fsScandirSettings);for(let s of n)this._handleEntry(s,r)}catch(n){this._handleError(n)}}_handleError(t){if(mt.isFatalError(this._settings,t))throw t}_handleEntry(t,r){let n=t.path;r!==void 0&&(t.path=mt.joinPathSegments(r,t.name,this._settings.pathSegmentSeparator)),mt.isAppliedFilter(this._settings.entryFilter,t)&&this._pushToStorage(t),t.dirent.isDirectory()&&mt.isAppliedFilter(this._settings.deepFilter,t)&&this._pushToQueue(n,r===void 0?void 0:t.path)}_pushToStorage(t){this._storage.push(t)}};Cr.default=wr});var Qi=y(Or=>{"use strict";Object.defineProperty(Or,"__esModule",{value:!0});var xl=Xi(),Tr=class{constructor(t,r){this._root=t,this._settings=r,this._reader=new xl.default(this._root,this._settings)}read(){return this._reader.read()}};Or.default=Tr});var Yi=y(kr=>{"use strict";Object.defineProperty(kr,"__esModule",{value:!0});var Pl=__nccwpck_require__(17),wl=gt(),Lr=class{constructor(t={}){this._options=t,this.basePath=this._getValue(this._options.basePath,void 0),this.concurrency=this._getValue(this._options.concurrency,Number.POSITIVE_INFINITY),this.deepFilter=this._getValue(this._options.deepFilter,null),this.entryFilter=this._getValue(this._options.entryFilter,null),this.errorFilter=this._getValue(this._options.errorFilter,null),this.pathSegmentSeparator=this._getValue(this._options.pathSegmentSeparator,Pl.sep),this.fsScandirSettings=new wl.Settings({followSymbolicLinks:this._options.followSymbolicLinks,fs:this._options.fs,pathSegmentSeparator:this._options.pathSegmentSeparator,stats:this._options.stats,throwErrorOnBrokenSymbolicLink:this._options.throwErrorOnBrokenSymbolicLink})}_getValue(t,r){return t??r}};kr.default=Lr});var At=y(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});ae.Settings=ae.walkStream=ae.walkSync=ae.walk=void 0;var Zi=Vi(),Cl=Ki(),Tl=Qi(),$r=Yi();ae.Settings=$r.default;function Ol(e,t,r){if(typeof t=="function"){new Zi.default(e,Et()).read(t);return}new Zi.default(e,Et(t)).read(r)}ae.walk=Ol;function Ll(e,t){let r=Et(t);return new Tl.default(e,r).read()}ae.walkSync=Ll;function kl(e,t){let r=Et(t);return new Cl.default(e,r).read()}ae.walkStream=kl;function Et(e={}){return e instanceof $r.default?e:new $r.default(e)}});var Rt=y(Ir=>{"use strict";Object.defineProperty(Ir,"__esModule",{value:!0});var $l=__nccwpck_require__(17),Hl=Re(),zi=ce(),Hr=class{constructor(t){this._settings=t,this._fsStatSettings=new Hl.Settings({followSymbolicLink:this._settings.followSymbolicLinks,fs:this._settings.fs,throwErrorOnBrokenSymbolicLink:this._settings.followSymbolicLinks})}_getFullEntryPath(t){return $l.resolve(this._settings.cwd,t)}_makeEntry(t,r){let n={name:r,path:r,dirent:zi.fs.createDirentFromStats(r,t)};return this._settings.stats&&(n.stats=t),n}_isFatalError(t){return!zi.errno.isEnoentCodeError(t)&&!this._settings.suppressErrors}};Ir.default=Hr});var Mr=y(Nr=>{"use strict";Object.defineProperty(Nr,"__esModule",{value:!0});var Il=__nccwpck_require__(781),Dl=Re(),Nl=At(),Ml=Rt(),Dr=class extends Ml.default{constructor(){super(...arguments),this._walkStream=Nl.walkStream,this._stat=Dl.stat}dynamic(t,r){return this._walkStream(t,r)}static(t,r){let n=t.map(this._getFullEntryPath,this),s=new Il.PassThrough({objectMode:!0});s._write=(i,o,a)=>this._getEntry(n[i],t[i],r).then(u=>{u!==null&&r.entryFilter(u)&&s.push(u),i===n.length-1&&s.end(),a()}).catch(a);for(let i=0;i<n.length;i++)s.write(i);return s}_getEntry(t,r,n){return this._getStat(t).then(s=>this._makeEntry(s,r)).catch(s=>{if(n.errorFilter(s))return null;throw s})}_getStat(t){return new Promise((r,n)=>{this._stat(t,this._fsStatSettings,(s,i)=>s===null?r(i):n(s))})}};Nr.default=Dr});var Ji=y(qr=>{"use strict";Object.defineProperty(qr,"__esModule",{value:!0});var Fl=At(),ql=Rt(),Bl=Mr(),Fr=class extends ql.default{constructor(){super(...arguments),this._walkAsync=Fl.walk,this._readerStream=new Bl.default(this._settings)}dynamic(t,r){return new Promise((n,s)=>{this._walkAsync(t,r,(i,o)=>{i===null?n(o):s(i)})})}async static(t,r){let n=[],s=this._readerStream.static(t,r);return new Promise((i,o)=>{s.once("error",o),s.on("data",a=>n.push(a)),s.once("end",()=>i(n))})}};qr.default=Fr});var eo=y(Gr=>{"use strict";Object.defineProperty(Gr,"__esModule",{value:!0});var He=ce(),Br=class{constructor(t,r,n){this._patterns=t,this._settings=r,this._micromatchOptions=n,this._storage=[],this._fillStorage()}_fillStorage(){let t=He.pattern.expandPatternsWithBraceExpansion(this._patterns);for(let r of t){let n=this._getPatternSegments(r),s=this._splitSegmentsIntoSections(n);this._storage.push({complete:s.length<=1,pattern:r,segments:n,sections:s})}}_getPatternSegments(t){return He.pattern.getPatternParts(t,this._micromatchOptions).map(n=>He.pattern.isDynamicPattern(n,this._settings)?{dynamic:!0,pattern:n,patternRe:He.pattern.makeRe(n,this._micromatchOptions)}:{dynamic:!1,pattern:n})}_splitSegmentsIntoSections(t){return He.array.splitWhen(t,r=>r.dynamic&&He.pattern.hasGlobStar(r.pattern))}};Gr.default=Br});var to=y(Ur=>{"use strict";Object.defineProperty(Ur,"__esModule",{value:!0});var Gl=eo(),jr=class extends Gl.default{match(t){let r=t.split("/"),n=r.length,s=this._storage.filter(i=>!i.complete||i.segments.length>n);for(let i of s){let o=i.sections[0];if(!i.complete&&n>o.length||r.every((u,d)=>{let f=i.segments[d];return!!(f.dynamic&&f.patternRe.test(u)||!f.dynamic&&f.pattern===u)}))return!0}return!1}};Ur.default=jr});var ro=y(Vr=>{"use strict";Object.defineProperty(Vr,"__esModule",{value:!0});var bt=ce(),jl=to(),Wr=class{constructor(t,r){this._settings=t,this._micromatchOptions=r}getFilter(t,r,n){let s=this._getMatcher(r),i=this._getNegativePatternsRe(n);return o=>this._filter(t,o,s,i)}_getMatcher(t){return new jl.default(t,this._settings,this._micromatchOptions)}_getNegativePatternsRe(t){let r=t.filter(bt.pattern.isAffectDepthOfReadingPattern);return bt.pattern.convertPatternsToRe(r,this._micromatchOptions)}_filter(t,r,n,s){if(this._isSkippedByDeep(t,r.path)||this._isSkippedSymbolicLink(r))return!1;let i=bt.path.removeLeadingDotSegment(r.path);return this._isSkippedByPositivePatterns(i,n)?!1:this._isSkippedByNegativePatterns(i,s)}_isSkippedByDeep(t,r){return this._settings.deep===1/0?!1:this._getEntryLevel(t,r)>=this._settings.deep}_getEntryLevel(t,r){let n=r.split("/").length;if(t==="")return n;let s=t.split("/").length;return n-s}_isSkippedSymbolicLink(t){return!this._settings.followSymbolicLinks&&t.dirent.isSymbolicLink()}_isSkippedByPositivePatterns(t,r){return!this._settings.baseNameMatch&&!r.match(t)}_isSkippedByNegativePatterns(t,r){return!bt.pattern.matchAny(t,r)}};Vr.default=Wr});var no=y(Xr=>{"use strict";Object.defineProperty(Xr,"__esModule",{value:!0});var be=ce(),Kr=class{constructor(t,r){this._settings=t,this._micromatchOptions=r,this.index=new Map}getFilter(t,r){let n=be.pattern.convertPatternsToRe(t,this._micromatchOptions),s=be.pattern.convertPatternsToRe(r,this._micromatchOptions);return i=>this._filter(i,n,s)}_filter(t,r,n){if(this._settings.unique&&this._isDuplicateEntry(t)||this._onlyFileFilter(t)||this._onlyDirectoryFilter(t)||this._isSkippedByAbsoluteNegativePatterns(t.path,n))return!1;let s=this._settings.baseNameMatch?t.name:t.path,i=t.dirent.isDirectory(),o=this._isMatchToPatterns(s,r,i)&&!this._isMatchToPatterns(t.path,n,i);return this._settings.unique&&o&&this._createIndexRecord(t),o}_isDuplicateEntry(t){return this.index.has(t.path)}_createIndexRecord(t){this.index.set(t.path,void 0)}_onlyFileFilter(t){return this._settings.onlyFiles&&!t.dirent.isFile()}_onlyDirectoryFilter(t){return this._settings.onlyDirectories&&!t.dirent.isDirectory()}_isSkippedByAbsoluteNegativePatterns(t,r){if(!this._settings.absolute)return!1;let n=be.path.makeAbsolute(this._settings.cwd,t);return be.pattern.matchAny(n,r)}_isMatchToPatterns(t,r,n){let s=be.path.removeLeadingDotSegment(t),i=be.pattern.matchAny(s,r);return!i&&n?be.pattern.matchAny(s+"/",r):i}};Xr.default=Kr});var so=y(Yr=>{"use strict";Object.defineProperty(Yr,"__esModule",{value:!0});var Ul=ce(),Qr=class{constructor(t){this._settings=t}getFilter(){return t=>this._isNonFatalError(t)}_isNonFatalError(t){return Ul.errno.isEnoentCodeError(t)||this._settings.suppressErrors}};Yr.default=Qr});var oo=y(zr=>{"use strict";Object.defineProperty(zr,"__esModule",{value:!0});var io=ce(),Zr=class{constructor(t){this._settings=t}getTransformer(){return t=>this._transform(t)}_transform(t){let r=t.path;return this._settings.absolute&&(r=io.path.makeAbsolute(this._settings.cwd,r),r=io.path.unixify(r)),this._settings.markDirectories&&t.dirent.isDirectory()&&(r+="/"),this._settings.objectMode?Object.assign(Object.assign({},t),{path:r}):r}};zr.default=Zr});var vt=y(en=>{"use strict";Object.defineProperty(en,"__esModule",{value:!0});var Wl=__nccwpck_require__(17),Vl=ro(),Kl=no(),Xl=so(),Ql=oo(),Jr=class{constructor(t){this._settings=t,this.errorFilter=new Xl.default(this._settings),this.entryFilter=new Kl.default(this._settings,this._getMicromatchOptions()),this.deepFilter=new Vl.default(this._settings,this._getMicromatchOptions()),this.entryTransformer=new Ql.default(this._settings)}_getRootDirectory(t){return Wl.resolve(this._settings.cwd,t.base)}_getReaderOptions(t){let r=t.base==="."?"":t.base;return{basePath:r,pathSegmentSeparator:"/",concurrency:this._settings.concurrency,deepFilter:this.deepFilter.getFilter(r,t.positive,t.negative),entryFilter:this.entryFilter.getFilter(t.positive,t.negative),errorFilter:this.errorFilter.getFilter(),followSymbolicLinks:this._settings.followSymbolicLinks,fs:this._settings.fs,stats:this._settings.stats,throwErrorOnBrokenSymbolicLink:this._settings.throwErrorOnBrokenSymbolicLink,transform:this.entryTransformer.getTransformer()}}_getMicromatchOptions(){return{dot:this._settings.dot,matchBase:this._settings.baseNameMatch,nobrace:!this._settings.braceExpansion,nocase:!this._settings.caseSensitiveMatch,noext:!this._settings.extglob,noglobstar:!this._settings.globstar,posix:!0,strictSlashes:!1}}};en.default=Jr});var ao=y(rn=>{"use strict";Object.defineProperty(rn,"__esModule",{value:!0});var Yl=Ji(),Zl=vt(),tn=class extends Zl.default{constructor(){super(...arguments),this._reader=new Yl.default(this._settings)}async read(t){let r=this._getRootDirectory(t),n=this._getReaderOptions(t);return(await this.api(r,t,n)).map(i=>n.transform(i))}api(t,r,n){return r.dynamic?this._reader.dynamic(t,n):this._reader.static(r.patterns,n)}};rn.default=tn});var uo=y(sn=>{"use strict";Object.defineProperty(sn,"__esModule",{value:!0});var zl=__nccwpck_require__(781),Jl=Mr(),ef=vt(),nn=class extends ef.default{constructor(){super(...arguments),this._reader=new Jl.default(this._settings)}read(t){let r=this._getRootDirectory(t),n=this._getReaderOptions(t),s=this.api(r,t,n),i=new zl.Readable({objectMode:!0,read:()=>{}});return s.once("error",o=>i.emit("error",o)).on("data",o=>i.emit("data",n.transform(o))).once("end",()=>i.emit("end")),i.once("close",()=>s.destroy()),i}api(t,r,n){return r.dynamic?this._reader.dynamic(t,n):this._reader.static(r.patterns,n)}};sn.default=nn});var co=y(an=>{"use strict";Object.defineProperty(an,"__esModule",{value:!0});var tf=Re(),rf=At(),nf=Rt(),on=class extends nf.default{constructor(){super(...arguments),this._walkSync=rf.walkSync,this._statSync=tf.statSync}dynamic(t,r){return this._walkSync(t,r)}static(t,r){let n=[];for(let s of t){let i=this._getFullEntryPath(s),o=this._getEntry(i,s,r);o===null||!r.entryFilter(o)||n.push(o)}return n}_getEntry(t,r,n){try{let s=this._getStat(t);return this._makeEntry(s,r)}catch(s){if(n.errorFilter(s))return null;throw s}}_getStat(t){return this._statSync(t,this._fsStatSettings)}};an.default=on});var lo=y(cn=>{"use strict";Object.defineProperty(cn,"__esModule",{value:!0});var sf=co(),of=vt(),un=class extends of.default{constructor(){super(...arguments),this._reader=new sf.default(this._settings)}read(t){let r=this._getRootDirectory(t),n=this._getReaderOptions(t);return this.api(r,t,n).map(n.transform)}api(t,r,n){return r.dynamic?this._reader.dynamic(t,n):this._reader.static(r.patterns,n)}};cn.default=un});var fo=y(De=>{"use strict";Object.defineProperty(De,"__esModule",{value:!0});De.DEFAULT_FILE_SYSTEM_ADAPTER=void 0;var Ie=__nccwpck_require__(147),af=__nccwpck_require__(37),uf=Math.max(af.cpus().length,1);De.DEFAULT_FILE_SYSTEM_ADAPTER={lstat:Ie.lstat,lstatSync:Ie.lstatSync,stat:Ie.stat,statSync:Ie.statSync,readdir:Ie.readdir,readdirSync:Ie.readdirSync};var ln=class{constructor(t={}){this._options=t,this.absolute=this._getValue(this._options.absolute,!1),this.baseNameMatch=this._getValue(this._options.baseNameMatch,!1),this.braceExpansion=this._getValue(this._options.braceExpansion,!0),this.caseSensitiveMatch=this._getValue(this._options.caseSensitiveMatch,!0),this.concurrency=this._getValue(this._options.concurrency,uf),this.cwd=this._getValue(this._options.cwd,process.cwd()),this.deep=this._getValue(this._options.deep,1/0),this.dot=this._getValue(this._options.dot,!1),this.extglob=this._getValue(this._options.extglob,!0),this.followSymbolicLinks=this._getValue(this._options.followSymbolicLinks,!0),this.fs=this._getFileSystemMethods(this._options.fs),this.globstar=this._getValue(this._options.globstar,!0),this.ignore=this._getValue(this._options.ignore,[]),this.markDirectories=this._getValue(this._options.markDirectories,!1),this.objectMode=this._getValue(this._options.objectMode,!1),this.onlyDirectories=this._getValue(this._options.onlyDirectories,!1),this.onlyFiles=this._getValue(this._options.onlyFiles,!0),this.stats=this._getValue(this._options.stats,!1),this.suppressErrors=this._getValue(this._options.suppressErrors,!1),this.throwErrorOnBrokenSymbolicLink=this._getValue(this._options.throwErrorOnBrokenSymbolicLink,!1),this.unique=this._getValue(this._options.unique,!0),this.onlyDirectories&&(this.onlyFiles=!1),this.stats&&(this.objectMode=!0)}_getValue(t,r){return t===void 0?r:t}_getFileSystemMethods(t={}){return Object.assign(Object.assign({},De.DEFAULT_FILE_SYSTEM_ADAPTER),t)}};De.default=ln});var dn=y((fh,_o)=>{"use strict";var po=fi(),ho=hi(),cf=ao(),lf=uo(),ff=lo(),fn=fo(),ve=ce();async function pn(e,t){Ne(e);let r=hn(e,cf.default,t),n=await Promise.all(r);return ve.array.flatten(n)}(function(e){function t(o,a){Ne(o);let u=hn(o,ff.default,a);return ve.array.flatten(u)}e.sync=t;function r(o,a){Ne(o);let u=hn(o,lf.default,a);return ve.stream.merge(u)}e.stream=r;function n(o,a){Ne(o);let u=ho.transform([].concat(o)),d=new fn.default(a);return po.generate(u,d)}e.generateTasks=n;function s(o,a){Ne(o);let u=new fn.default(a);return ve.pattern.isDynamicPattern(o,u)}e.isDynamicPattern=s;function i(o){return Ne(o),ve.path.escape(o)}e.escapePath=i})(pn||(pn={}));function hn(e,t,r){let n=ho.transform([].concat(e)),s=new fn.default(r),i=po.generate(n,s),o=new t(s);return i.map(o.read,o)}function Ne(e){if(![].concat(e).every(n=>ve.string.isString(n)&&!ve.string.isEmpty(n)))throw new TypeError("Patterns must be a string (non empty) or an array of strings")}_o.exports=pn});var yo=y(xe=>{"use strict";var{promisify:pf}=__nccwpck_require__(837),go=__nccwpck_require__(147);async function _n(e,t,r){if(typeof r!="string")throw new TypeError(`Expected a string, got ${typeof r}`);try{return(await pf(go[e])(r))[t]()}catch(n){if(n.code==="ENOENT")return!1;throw n}}function gn(e,t,r){if(typeof r!="string")throw new TypeError(`Expected a string, got ${typeof r}`);try{return go[e](r)[t]()}catch(n){if(n.code==="ENOENT")return!1;throw n}}xe.isFile=_n.bind(null,"stat","isFile");xe.isDirectory=_n.bind(null,"stat","isDirectory");xe.isSymlink=_n.bind(null,"lstat","isSymbolicLink");xe.isFileSync=gn.bind(null,"statSync","isFile");xe.isDirectorySync=gn.bind(null,"statSync","isDirectory");xe.isSymlinkSync=gn.bind(null,"lstatSync","isSymbolicLink")});var Ro=y((hh,yn)=>{"use strict";var Pe=__nccwpck_require__(17),So=yo(),mo=e=>e.length>1?`{${e.join(",")}}`:e[0],Eo=(e,t)=>{let r=e[0]==="!"?e.slice(1):e;return Pe.isAbsolute(r)?r:Pe.join(t,r)},hf=(e,t)=>Pe.extname(e)?`**/${e}`:`**/${e}.${mo(t)}`,Ao=(e,t)=>{if(t.files&&!Array.isArray(t.files))throw new TypeError(`Expected \`files\` to be of type \`Array\` but received type \`${typeof t.files}\``);if(t.extensions&&!Array.isArray(t.extensions))throw new TypeError(`Expected \`extensions\` to be of type \`Array\` but received type \`${typeof t.extensions}\``);return t.files&&t.extensions?t.files.map(r=>Pe.posix.join(e,hf(r,t.extensions))):t.files?t.files.map(r=>Pe.posix.join(e,`**/${r}`)):t.extensions?[Pe.posix.join(e,`**/*.${mo(t.extensions)}`)]:[Pe.posix.join(e,"**")]};yn.exports=async(e,t)=>{if(t={cwd:process.cwd(),...t},typeof t.cwd!="string")throw new TypeError(`Expected \`cwd\` to be of type \`string\` but received type \`${typeof t.cwd}\``);let r=await Promise.all([].concat(e).map(async n=>await So.isDirectory(Eo(n,t.cwd))?Ao(n,t):n));return[].concat.apply([],r)};yn.exports.sync=(e,t)=>{if(t={cwd:process.cwd(),...t},typeof t.cwd!="string")throw new TypeError(`Expected \`cwd\` to be of type \`string\` but received type \`${typeof t.cwd}\``);let r=[].concat(e).map(n=>So.isDirectorySync(Eo(n,t.cwd))?Ao(n,t):n);return[].concat.apply([],r)}});var ko=y((dh,Lo)=>{function bo(e){return Array.isArray(e)?e:[e]}var wo="",vo=" ",Sn="\\",df=/^\s+$/,_f=/(?:[^\\]|^)\\$/,gf=/^\\!/,yf=/^\\#/,Sf=/\r?\n/g,mf=/^\.*\/|^\.+$/,mn="/",Co="node-ignore";typeof Symbol<"u"&&(Co=Symbol.for("node-ignore"));var xo=Co,Ef=(e,t,r)=>Object.defineProperty(e,t,{value:r}),Af=/([0-z])-([0-z])/g,To=()=>!1,Rf=e=>e.replace(Af,(t,r,n)=>r.charCodeAt(0)<=n.charCodeAt(0)?t:wo),bf=e=>{let{length:t}=e;return e.slice(0,t-t%2)},vf=[[/\\?\s+$/,e=>e.indexOf("\\")===0?vo:wo],[/\\\s/g,()=>vo],[/[\\$.|*+(){^]/g,e=>`\\${e}`],[/(?!\\)\?/g,()=>"[^/]"],[/^\//,()=>"^"],[/\//g,()=>"\\/"],[/^\^*\\\*\\\*\\\//,()=>"^(?:.*\\/)?"],[/^(?=[^^])/,function(){return/\/(?!$)/.test(this)?"^":"(?:^|\\/)"}],[/\\\/\\\*\\\*(?=\\\/|$)/g,(e,t,r)=>t+6<r.length?"(?:\\/[^\\/]+)*":"\\/.+"],[/(^|[^\\]+)(\\\*)+(?=.+)/g,(e,t,r)=>{let n=r.replace(/\\\*/g,"[^\\/]*");return t+n}],[/\\\\\\(?=[$.|*+(){^])/g,()=>Sn],[/\\\\/g,()=>Sn],[/(\\)?\[([^\]/]*?)(\\*)($|\])/g,(e,t,r,n,s)=>t===Sn?`\\[${r}${bf(n)}${s}`:s==="]"&&n.length%2===0?`[${Rf(r)}${n}]`:"[]"],[/(?:[^*])$/,e=>/\/$/.test(e)?`${e}$`:`${e}(?=$|\\/$)`],[/(\^|\\\/)?\\\*$/,(e,t)=>`${t?`${t}[^/]+`:"[^/]*"}(?=$|\\/$)`]],Po=Object.create(null),xf=(e,t)=>{let r=Po[e];return r||(r=vf.reduce((n,s)=>n.replace(s[0],s[1].bind(e)),e),Po[e]=r),t?new RegExp(r,"i"):new RegExp(r)},Rn=e=>typeof e=="string",Pf=e=>e&&Rn(e)&&!df.test(e)&&!_f.test(e)&&e.indexOf("#")!==0,wf=e=>e.split(Sf),En=class{constructor(t,r,n,s){this.origin=t,this.pattern=r,this.negative=n,this.regex=s}},Cf=(e,t)=>{let r=e,n=!1;e.indexOf("!")===0&&(n=!0,e=e.substr(1)),e=e.replace(gf,"!").replace(yf,"#");let s=xf(e,t);return new En(r,e,n,s)},Tf=(e,t)=>{throw new t(e)},fe=(e,t,r)=>Rn(e)?e?fe.isNotRelative(e)?r(`path should be a \`path.relative()\`d string, but got "${t}"`,RangeError):!0:r("path must not be empty",TypeError):r(`path must be a string, but got \`${t}\``,TypeError),Oo=e=>mf.test(e);fe.isNotRelative=Oo;fe.convert=e=>e;var An=class{constructor({ignorecase:t=!0,ignoreCase:r=t,allowRelativePaths:n=!1}={}){Ef(this,xo,!0),this._rules=[],this._ignoreCase=r,this._allowRelativePaths=n,this._initCache()}_initCache(){this._ignoreCache=Object.create(null),this._testCache=Object.create(null)}_addPattern(t){if(t&&t[xo]){this._rules=this._rules.concat(t._rules),this._added=!0;return}if(Pf(t)){let r=Cf(t,this._ignoreCase);this._added=!0,this._rules.push(r)}}add(t){return this._added=!1,bo(Rn(t)?wf(t):t).forEach(this._addPattern,this),this._added&&this._initCache(),this}addPattern(t){return this.add(t)}_testOne(t,r){let n=!1,s=!1;return this._rules.forEach(i=>{let{negative:o}=i;if(s===o&&n!==s||o&&!n&&!s&&!r)return;i.regex.test(t)&&(n=!o,s=o)}),{ignored:n,unignored:s}}_test(t,r,n,s){let i=t&&fe.convert(t);return fe(i,t,this._allowRelativePaths?To:Tf),this._t(i,r,n,s)}_t(t,r,n,s){if(t in r)return r[t];if(s||(s=t.split(mn)),s.pop(),!s.length)return r[t]=this._testOne(t,n);let i=this._t(s.join(mn)+mn,r,n,s);return r[t]=i.ignored?i:this._testOne(t,n)}ignores(t){return this._test(t,this._ignoreCache,!1).ignored}createFilter(){return t=>!this.ignores(t)}filter(t){return bo(t).filter(this.createFilter())}test(t){return this._test(t,this._testCache,!0)}},xt=e=>new An(e),Of=e=>fe(e&&fe.convert(e),e,To);xt.isPathValid=Of;xt.default=xt;Lo.exports=xt;if(typeof process<"u"&&(process.env&&process.env.IGNORE_TEST_WIN32||process.platform==="win32")){let e=r=>/^\\\\\?\\/.test(r)||/["<>|\u0000-\u001F]+/u.test(r)?r:r.replace(/\\/g,"/");fe.convert=e;let t=/^[a-z]:\//i;fe.isNotRelative=r=>t.test(r)||Oo(r)}});var Uf={};aa(Uf,{generateGlobTasks:()=>Gf,generateGlobTasksSync:()=>jf,globby:()=>Mf,globbyStream:()=>qf,globbySync:()=>Ff,isDynamicPattern:()=>Bf,isGitIgnored:()=>qo,isGitIgnoredSync:()=>Bo});module.exports=ua(Uf);var Go=re(__nccwpck_require__(561),1),jo=re(__nccwpck_require__(411),1),Uo=re(Lt(),1),We=re(dn(),1),Ue=re(Ro(),1);var Io=re(__nccwpck_require__(742),1),bn=re(__nccwpck_require__(561),1),we=re(__nccwpck_require__(411),1),vn=re(dn(),1),Do=re(ko(),1);function Me(e){let t=/^\\\\\?\\/.test(e),r=/[^\u0000-\u0080]+/.test(e);return t||r?e:e.replace(/\\/g,"/")}var $o=__nccwpck_require__(20),Ho=__nccwpck_require__(492),je=e=>e instanceof URL?(0,$o.fileURLToPath)(e):e,Pt=class extends Ho.Transform{constructor(t){super({objectMode:!0,transform(r,n,s){s(void 0,t(r)?r:void 0)}})}},wt=e=>e[0]==="!";var No={ignore:["**/node_modules","**/flow-typed","**/coverage","**/.git"],absolute:!0,dot:!0},Ct="**/.gitignore",Lf=(e,t)=>wt(e)?"!"+we.default.posix.join(t,e.slice(1)):we.default.posix.join(t,e),kf=(e,t)=>{let r=Me(we.default.relative(t,we.default.dirname(e.filePath)));return e.content.split(/\r?\n/).filter(n=>n&&!n.startsWith("#")).map(n=>Lf(n,r))},$f=(e,t)=>{if(t=Me(t),we.default.isAbsolute(e)){if(Me(e).startsWith(t))return we.default.relative(t,e);throw new Error(`Path ${e} is not in cwd ${t}`)}return e},Mo=(e,t)=>{let r=e.flatMap(s=>kf(s,t)),n=(0,Do.default)().add(r);return s=>(s=je(s),s=$f(s,t),s?n.ignores(Me(s)):!1)},Fo=(e={})=>({cwd:je(e.cwd)||Io.default.cwd()}),xn=async(e,t)=>{let{cwd:r}=Fo(t),n=await(0,vn.default)(e,{cwd:r,...No}),s=await Promise.all(n.map(async i=>({filePath:i,content:await bn.default.promises.readFile(i,"utf8")})));return Mo(s,r)},Pn=(e,t)=>{let{cwd:r}=Fo(t),s=vn.default.sync(e,{cwd:r,...No}).map(i=>({filePath:i,content:bn.default.readFileSync(i,"utf8")}));return Mo(s,r)},qo=e=>xn(Ct,e),Bo=e=>Pn(Ct,e);var Hf=e=>{if(e.some(t=>typeof t!="string"))throw new TypeError("Patterns must be a string or an array of strings")},wn=e=>(e=[...new Set([e].flat())],Hf(e),e),If=e=>{if(!e.cwd)return;let t;try{t=Go.default.statSync(e.cwd)}catch{return}if(!t.isDirectory())throw new Error("The `cwd` option must be a path to a directory")},Wo=(e={})=>(e={ignore:[],expandDirectories:!0,...e,cwd:je(e.cwd)},If(e),e),Vo=e=>async(t,r)=>e(wn(t),Wo(r)),Tt=e=>(t,r)=>e(wn(t),Wo(r)),Ko=e=>{let{ignoreFiles:t,gitignore:r}=e,n=t?wn(t):[];return r&&n.push(Ct),n},Df=async e=>{let t=Ko(e);return Qo(t.length>0&&await xn(t,{cwd:e.cwd}))},Xo=e=>{let t=Ko(e);return Qo(t.length>0&&Pn(t,{cwd:e.cwd}))},Qo=e=>{let t=new Set;return r=>{let n=r.path||r,s=jo.default.normalize(n),i=t.has(s)||e&&e(n);return t.add(s),!i}},Yo=(e,t)=>e.flat().filter(r=>t(r)),Nf=(e,t)=>(0,Uo.default)(e).pipe(new Pt(r=>t(r))),Zo=(e,t)=>{let r=[];for(;e.length>0;){let n=e.findIndex(i=>wt(i));if(n===-1){r.push({patterns:e,options:t});break}let s=e[n].slice(1);for(let i of r)i.options.ignore.push(s);n!==0&&r.push({patterns:e.slice(0,n),options:{...t,ignore:[...t.ignore,s]}}),e=e.slice(n+1)}return r},zo=(e,t)=>({...t?{cwd:t}:{},...Array.isArray(e)?{files:e}:e}),Jo=async(e,t)=>{let r=Zo(e,t),{cwd:n,expandDirectories:s}=t;if(!s)return r;let i=zo(s,n),o=n?{cwd:n}:void 0;return Promise.all(r.map(async a=>{let{patterns:u,options:d}=a;return[u,d.ignore]=await Promise.all([(0,Ue.default)(u,i),(0,Ue.default)(d.ignore,o)]),{patterns:u,options:d}}))},Cn=(e,t)=>{let r=Zo(e,t),{cwd:n,expandDirectories:s}=t;if(!s)return r;let i=zo(s,n),o=n?{cwd:n}:void 0;return r.map(a=>{let{patterns:u,options:d}=a;return u=Ue.default.sync(u,i),d.ignore=Ue.default.sync(d.ignore,o),{patterns:u,options:d}})},Mf=Vo(async(e,t)=>{let[r,n]=await Promise.all([Jo(e,t),Df(t)]),s=await Promise.all(r.map(i=>(0,We.default)(i.patterns,i.options)));return Yo(s,n)}),Ff=Tt((e,t)=>{let r=Cn(e,t),n=Xo(t),s=r.map(i=>We.default.sync(i.patterns,i.options));return Yo(s,n)}),qf=Tt((e,t)=>{let r=Cn(e,t),n=Xo(t),s=r.map(i=>We.default.stream(i.patterns,i.options));return Nf(s,n)}),Bf=Tt((e,t)=>e.some(r=>We.default.isDynamicPattern(r,t))),Gf=Vo(Jo),jf=Tt(Cn);0&&(0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 294:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(219);


/***/ }),

/***/ 219:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var net = __nccwpck_require__(808);
var tls = __nccwpck_require__(404);
var http = __nccwpck_require__(685);
var https = __nccwpck_require__(687);
var events = __nccwpck_require__(361);
var assert = __nccwpck_require__(491);
var util = __nccwpck_require__(837);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 840:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "v1", ({
  enumerable: true,
  get: function () {
    return _v.default;
  }
}));
Object.defineProperty(exports, "v3", ({
  enumerable: true,
  get: function () {
    return _v2.default;
  }
}));
Object.defineProperty(exports, "v4", ({
  enumerable: true,
  get: function () {
    return _v3.default;
  }
}));
Object.defineProperty(exports, "v5", ({
  enumerable: true,
  get: function () {
    return _v4.default;
  }
}));
Object.defineProperty(exports, "NIL", ({
  enumerable: true,
  get: function () {
    return _nil.default;
  }
}));
Object.defineProperty(exports, "version", ({
  enumerable: true,
  get: function () {
    return _version.default;
  }
}));
Object.defineProperty(exports, "validate", ({
  enumerable: true,
  get: function () {
    return _validate.default;
  }
}));
Object.defineProperty(exports, "stringify", ({
  enumerable: true,
  get: function () {
    return _stringify.default;
  }
}));
Object.defineProperty(exports, "parse", ({
  enumerable: true,
  get: function () {
    return _parse.default;
  }
}));

var _v = _interopRequireDefault(__nccwpck_require__(628));

var _v2 = _interopRequireDefault(__nccwpck_require__(409));

var _v3 = _interopRequireDefault(__nccwpck_require__(122));

var _v4 = _interopRequireDefault(__nccwpck_require__(120));

var _nil = _interopRequireDefault(__nccwpck_require__(332));

var _version = _interopRequireDefault(__nccwpck_require__(595));

var _validate = _interopRequireDefault(__nccwpck_require__(900));

var _stringify = _interopRequireDefault(__nccwpck_require__(950));

var _parse = _interopRequireDefault(__nccwpck_require__(746));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 569:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _crypto = _interopRequireDefault(__nccwpck_require__(113));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return _crypto.default.createHash('md5').update(bytes).digest();
}

var _default = md5;
exports["default"] = _default;

/***/ }),

/***/ 332:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = '00000000-0000-0000-0000-000000000000';
exports["default"] = _default;

/***/ }),

/***/ 746:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__nccwpck_require__(900));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

var _default = parse;
exports["default"] = _default;

/***/ }),

/***/ 814:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
exports["default"] = _default;

/***/ }),

/***/ 807:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = rng;

var _crypto = _interopRequireDefault(__nccwpck_require__(113));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;

function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    _crypto.default.randomFillSync(rnds8Pool);

    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

/***/ }),

/***/ 274:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _crypto = _interopRequireDefault(__nccwpck_require__(113));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return _crypto.default.createHash('sha1').update(bytes).digest();
}

var _default = sha1;
exports["default"] = _default;

/***/ }),

/***/ 950:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__nccwpck_require__(900));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

var _default = stringify;
exports["default"] = _default;

/***/ }),

/***/ 628:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _rng = _interopRequireDefault(__nccwpck_require__(807));

var _stringify = _interopRequireDefault(__nccwpck_require__(950));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng.default)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _stringify.default)(b);
}

var _default = v1;
exports["default"] = _default;

/***/ }),

/***/ 409:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__nccwpck_require__(998));

var _md = _interopRequireDefault(__nccwpck_require__(569));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = v3;
exports["default"] = _default;

/***/ }),

/***/ 998:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
exports.URL = exports.DNS = void 0;

var _stringify = _interopRequireDefault(__nccwpck_require__(950));

var _parse = _interopRequireDefault(__nccwpck_require__(746));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
exports.DNS = DNS;
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
exports.URL = URL;

function _default(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0, _stringify.default)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ 122:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _rng = _interopRequireDefault(__nccwpck_require__(807));

var _stringify = _interopRequireDefault(__nccwpck_require__(950));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  options = options || {};

  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify.default)(rnds);
}

var _default = v4;
exports["default"] = _default;

/***/ }),

/***/ 120:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__nccwpck_require__(998));

var _sha = _interopRequireDefault(__nccwpck_require__(274));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = v5;
exports["default"] = _default;

/***/ }),

/***/ 900:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regex = _interopRequireDefault(__nccwpck_require__(814));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

var _default = validate;
exports["default"] = _default;

/***/ }),

/***/ 595:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__nccwpck_require__(900));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

var _default = version;
exports["default"] = _default;

/***/ }),

/***/ 491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 808:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 561:
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ 411:
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ 742:
/***/ ((module) => {

"use strict";
module.exports = require("node:process");

/***/ }),

/***/ 492:
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ 20:
/***/ ((module) => {

"use strict";
module.exports = require("node:url");

/***/ }),

/***/ 37:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 17:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 404:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(109);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map