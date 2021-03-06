﻿/*
Copyright (C) 2017 Charlie Lee

TypeNESs has referred to Ben Firshman's JSNES
https://github.com/bfirsh/jsnes

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

// namespace NES {
    import { Machine } from './Machine';

enum KEYS {
        KEY_A = 0,
        KEY_B = 1,
        KEY_SELECT = 2,
        KEY_START = 3,
        KEY_UP = 4,
        KEY_DOWN = 5,
        KEY_LEFT = 6,
        KEY_RIGHT = 7
    }
    export class Keyboard {
        public state1: Array<number> = new Array(8);
        public state2: Array<number> = new Array(8);
        private machine: Machine;

        constructor(m: Machine) {
            this.machine = m;
            for (let i: number = 0; i < this.state1.length; i++) {
                this.state1[i] = 0x40;
            }
            this.state2 = new Array(8);
            for (let i = 0; i < this.state2.length; i++) {
                this.state2[i] = 0x40;
            }
        }

        private setKey(key: number, value: number): boolean {
            switch (key) {
                case 88: this.state1[KEYS.KEY_A] = value; break;      // X
                case 89: this.state1[KEYS.KEY_B] = value; break;      // Y (Central European keyboard)
                case 90: this.state1[KEYS.KEY_B] = value; break;      // Z
                case 17: this.state1[KEYS.KEY_SELECT] = value; break; // Right Ctrl
                case 13: this.state1[KEYS.KEY_START] = value; break;  // Enter
                case 38: this.state1[KEYS.KEY_UP] = value; break;     // Up
                case 40: this.state1[KEYS.KEY_DOWN] = value; break;   // Down
                case 37: this.state1[KEYS.KEY_LEFT] = value; break;   // Left
                case 39: this.state1[KEYS.KEY_RIGHT] = value; break;  // Right

                case 103: this.state2[KEYS.KEY_A] = value; break;     // Num-7
                case 105: this.state2[KEYS.KEY_B] = value; break;     // Num-9
                case 99: this.state2[KEYS.KEY_SELECT] = value; break; // Num-3
                case 97: this.state2[KEYS.KEY_START] = value; break;  // Num-1
                case 104: this.state2[KEYS.KEY_UP] = value; break;    // Num-8
                case 98: this.state2[KEYS.KEY_DOWN] = value; break;   // Num-2
                case 100: this.state2[KEYS.KEY_LEFT] = value; break;  // Num-4
                case 102: this.state2[KEYS.KEY_RIGHT] = value; break; // Num-6
                default: return true;
            }
            return false; // preventDefault
        }

        public keyDown(evt: KeyboardEvent) {
            console.log('keydown ', this.machine.totalFrames, evt.keyCode);

            if (!this.setKey(evt.keyCode, 0x41) && evt.preventDefault) {
                evt.preventDefault();
            }
        }

        public keyUp(evt: KeyboardEvent) {
            console.log('keyup ', this.machine.totalFrames, evt.keyCode);

            if (!this.setKey(evt.keyCode, 0x40) && evt.preventDefault) {
                evt.preventDefault();
            }
        }

        public keyPress(evt: KeyboardEvent) {
            evt.preventDefault();
        }

        public touchBtnDown(key: number): void {
            switch (key) {
                case 0:
                    this.state1[KEYS.KEY_A] = 0x41;
                    break;
                case 1:
                    this.state1[KEYS.KEY_B] = 0x41;
                    break;
                case 2:
                    this.state1[KEYS.KEY_SELECT] = 0x41;
                    break;
                case 3:
                    this.state1[KEYS.KEY_START] = 0x41;
                    break;
                case 4:
                    this.state1[KEYS.KEY_UP] = 0x41;
                    break;
                case 5:
                    this.state1[KEYS.KEY_DOWN] = 0x41;
                    break;
                case 6:
                    this.state1[KEYS.KEY_LEFT] = 0x41;
                    break;
                case 7:
                    this.state1[KEYS.KEY_RIGHT] = 0x41;
                    break;
                default:
                    break;
            }
        }

        public touchBtnUp(key: number): void {
            switch (key) {
                case 0:
                    this.state1[KEYS.KEY_A] = 0x40;
                    break;
                case 1:
                    this.state1[KEYS.KEY_B] = 0x40;
                    break;
                case 2:
                    this.state1[KEYS.KEY_SELECT] = 0x40;
                    break;
                case 3:
                    this.state1[KEYS.KEY_START] = 0x40;
                    break;
                case 4:
                    this.state1[KEYS.KEY_UP] = 0x40;
                    break;
                case 5:
                    this.state1[KEYS.KEY_DOWN] = 0x40;
                    break;
                case 6:
                    this.state1[KEYS.KEY_LEFT] = 0x40;
                    break;
                case 7:
                    this.state1[KEYS.KEY_RIGHT] = 0x40;
                    break;
                default:
                    break;
            }
        }
    }
// }