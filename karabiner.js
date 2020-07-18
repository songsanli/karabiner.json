const fs = require("fs");

const karabinerObject = {
  "global": {
      "check_for_updates_on_startup": false,
      "show_in_menu_bar": true,
      "show_profile_name_in_menu_bar": false
  },
  "profiles": [
      {
          "complex_modifications": {
              "parameters": {
                  "basic.simultaneous_threshold_milliseconds": 50,
                  "basic.to_delayed_action_delay_milliseconds": 500,
                  "basic.to_if_alone_timeout_milliseconds": 1000,
                  "basic.to_if_held_down_threshold_milliseconds": 500,
                  "mouse_motion_to_scroll.speed": 100
              },
              "rules": []
          },
          "devices": [
              {
                  "disable_built_in_keyboard_if_exists": false,
                  "fn_function_keys": [],
                  "identifiers": {
                      "is_keyboard": true,
                      "is_pointing_device": false,
                      "product_id": 50475,
                      "vendor_id": 1133
                  },
                  "ignore": true,
                  "manipulate_caps_lock_led": false,
                  "simple_modifications": []
              },
              {
                  "disable_built_in_keyboard_if_exists": false,
                  "fn_function_keys": [],
                  "identifiers": {
                      "is_keyboard": true,
                      "is_pointing_device": false,
                      "product_id": 636,
                      "vendor_id": 1452
                  },
                  "ignore": false,
                  "manipulate_caps_lock_led": true,
                  "simple_modifications": [
                      {
                          "from": {
                              "key_code": "caps_lock"
                          },
                          "to": {
                              "key_code": "left_control"
                          }
                      }
                  ]
              }
          ],
          "fn_function_keys": [
              {
                  "from": {
                      "key_code": "f1"
                  },
                  "to": {
                      "consumer_key_code": "display_brightness_decrement"
                  }
              },
              {
                  "from": {
                      "key_code": "f2"
                  },
                  "to": {
                      "consumer_key_code": "display_brightness_increment"
                  }
              },
              {
                  "from": {
                      "key_code": "f3"
                  },
                  "to": {
                      "key_code": "mission_control"
                  }
              },
              {
                  "from": {
                      "key_code": "f4"
                  },
                  "to": {
                      "key_code": "launchpad"
                  }
              },
              {
                  "from": {
                      "key_code": "f5"
                  },
                  "to": {
                      "key_code": "illumination_decrement"
                  }
              },
              {
                  "from": {
                      "key_code": "f6"
                  },
                  "to": {
                      "key_code": "illumination_increment"
                  }
              },
              {
                  "from": {
                      "key_code": "f7"
                  },
                  "to": {
                      "consumer_key_code": "rewind"
                  }
              },
              {
                  "from": {
                      "key_code": "f8"
                  },
                  "to": {
                      "consumer_key_code": "play_or_pause"
                  }
              },
              {
                  "from": {
                      "key_code": "f9"
                  },
                  "to": {
                      "consumer_key_code": "fastforward"
                  }
              },
              {
                  "from": {
                      "key_code": "f10"
                  },
                  "to": {
                      "consumer_key_code": "mute"
                  }
              },
              {
                  "from": {
                      "key_code": "f11"
                  },
                  "to": {
                      "consumer_key_code": "volume_decrement"
                  }
              },
              {
                  "from": {
                      "key_code": "f12"
                  },
                  "to": {
                      "consumer_key_code": "volume_increment"
                  }
              }
          ],
          "name": "Base",
          "parameters": {
              "delay_milliseconds_before_open_device": 1000
          },
          "selected": false,
          "simple_modifications": [],
          "virtual_hid_keyboard": {
              "country_code": 0,
              "mouse_key_xy_scale": 100
          }
      },
      {
          "complex_modifications": {
              "parameters": {
                  "basic.simultaneous_threshold_milliseconds": 50,
                  "basic.to_delayed_action_delay_milliseconds": 500,
                  "basic.to_if_alone_timeout_milliseconds": 1000,
                  "basic.to_if_held_down_threshold_milliseconds": 500,
                  "mouse_motion_to_scroll.speed": 100
              },
              "rules": [
                  {
                      "description": "Emacs key bindings [control+keys] (rev 10)",
                      "manipulators": [
                          {
                              "conditions": [
                                  {
                                      "bundle_identifiers": [
                                          "^org\\.gnu\\.Emacs$",
                                          "^org\\.gnu\\.AquamacsEmacs$",
                                          "^org\\.gnu\\.Aquamacs$",
                                          "^org\\.pqrs\\.unknownapp.conkeror$",
                                          "^com\\.microsoft\\.rdc$",
                                          "^com\\.microsoft\\.rdc\\.mac$",
                                          "^com\\.microsoft\\.rdc\\.macos$",
                                          "^com\\.microsoft\\.rdc\\.osx\\.beta$",
                                          "^net\\.sf\\.cord$",
                                          "^com\\.thinomenon\\.RemoteDesktopConnection$",
                                          "^com\\.itap-mobile\\.qmote$",
                                          "^com\\.nulana\\.remotixmac$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer\\.web$",
                                          "^com\\.teamviewer\\.TeamViewer$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.2X\\.Client\\.Mac$",
                                          "^com\\.apple\\.Terminal$",
                                          "^com\\.googlecode\\.iterm2$",
                                          "^co\\.zeit\\.hyperterm$",
                                          "^co\\.zeit\\.hyper$",
                                          "^io\\.alacritty$",
                                          "^net\\.kovidgoyal\\.kitty$",
                                          "^org\\.vim\\.",
                                          "^com\\.qvacua\\.VimR$",
                                          "^com\\.vmware\\.fusion$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.vmware\\.view$",
                                          "^com\\.parallels\\.desktop$",
                                          "^com\\.parallels\\.vm$",
                                          "^com\\.parallels\\.desktop\\.console$",
                                          "^org\\.virtualbox\\.app\\.VirtualBoxVM$",
                                          "^com\\.citrix\\.XenAppViewer$",
                                          "^com\\.vmware\\.proxyApp\\.",
                                          "^com\\.parallels\\.winapp\\.",
                                          "^org\\.x\\.X11$",
                                          "^com\\.apple\\.x11$",
                                          "^org\\.macosforge\\.xquartz\\.X11$",
                                          "^org\\.macports\\.X11$",
                                          "^com\\.sublimetext\\.",
                                          "^com\\.microsoft\\.VSCode$",
                                          "^com\\.culturedcode\\.ThingsMac"
                                      ],
                                      "type": "frontmost_application_unless"
                                  }
                              ],
                              "from": {
                                  "key_code": "d",
                                  "modifiers": {
                                      "mandatory": [
                                          "control"
                                      ],
                                      "optional": [
                                          "caps_lock",
                                          "option"
                                      ]
                                  }
                              },
                              "to": [
                                  {
                                      "key_code": "delete_forward"
                                  }
                              ],
                              "type": "basic"
                          },
                          {
                              "conditions": [
                                  {
                                      "bundle_identifiers": [
                                          "^org\\.gnu\\.Emacs$",
                                          "^org\\.gnu\\.AquamacsEmacs$",
                                          "^org\\.gnu\\.Aquamacs$",
                                          "^org\\.pqrs\\.unknownapp.conkeror$",
                                          "^com\\.microsoft\\.rdc$",
                                          "^com\\.microsoft\\.rdc\\.mac$",
                                          "^com\\.microsoft\\.rdc\\.macos$",
                                          "^com\\.microsoft\\.rdc\\.osx\\.beta$",
                                          "^net\\.sf\\.cord$",
                                          "^com\\.thinomenon\\.RemoteDesktopConnection$",
                                          "^com\\.itap-mobile\\.qmote$",
                                          "^com\\.nulana\\.remotixmac$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer\\.web$",
                                          "^com\\.teamviewer\\.TeamViewer$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.2X\\.Client\\.Mac$",
                                          "^com\\.apple\\.Terminal$",
                                          "^com\\.googlecode\\.iterm2$",
                                          "^co\\.zeit\\.hyperterm$",
                                          "^co\\.zeit\\.hyper$",
                                          "^io\\.alacritty$",
                                          "^net\\.kovidgoyal\\.kitty$",
                                          "^org\\.vim\\.",
                                          "^com\\.qvacua\\.VimR$",
                                          "^com\\.vmware\\.fusion$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.vmware\\.view$",
                                          "^com\\.parallels\\.desktop$",
                                          "^com\\.parallels\\.vm$",
                                          "^com\\.parallels\\.desktop\\.console$",
                                          "^org\\.virtualbox\\.app\\.VirtualBoxVM$",
                                          "^com\\.citrix\\.XenAppViewer$",
                                          "^com\\.vmware\\.proxyApp\\.",
                                          "^com\\.parallels\\.winapp\\.",
                                          "^org\\.x\\.X11$",
                                          "^com\\.apple\\.x11$",
                                          "^org\\.macosforge\\.xquartz\\.X11$",
                                          "^org\\.macports\\.X11$",
                                          "^com\\.sublimetext\\.",
                                          "^com\\.microsoft\\.VSCode$",
                                          "^com\\.culturedcode\\.ThingsMac"
                                      ],
                                      "type": "frontmost_application_unless"
                                  }
                              ],
                              "from": {
                                  "key_code": "h",
                                  "modifiers": {
                                      "mandatory": [
                                          "control"
                                      ],
                                      "optional": [
                                          "caps_lock",
                                          "option"
                                      ]
                                  }
                              },
                              "to": [
                                  {
                                      "key_code": "delete_or_backspace"
                                  }
                              ],
                              "type": "basic"
                          },
                          {
                              "conditions": [
                                  {
                                      "bundle_identifiers": [
                                          "^org\\.gnu\\.Emacs$",
                                          "^org\\.gnu\\.AquamacsEmacs$",
                                          "^org\\.gnu\\.Aquamacs$",
                                          "^org\\.pqrs\\.unknownapp.conkeror$",
                                          "^com\\.microsoft\\.rdc$",
                                          "^com\\.microsoft\\.rdc\\.mac$",
                                          "^com\\.microsoft\\.rdc\\.macos$",
                                          "^com\\.microsoft\\.rdc\\.osx\\.beta$",
                                          "^net\\.sf\\.cord$",
                                          "^com\\.thinomenon\\.RemoteDesktopConnection$",
                                          "^com\\.itap-mobile\\.qmote$",
                                          "^com\\.nulana\\.remotixmac$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer\\.web$",
                                          "^com\\.teamviewer\\.TeamViewer$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.2X\\.Client\\.Mac$",
                                          "^com\\.apple\\.Terminal$",
                                          "^com\\.googlecode\\.iterm2$",
                                          "^co\\.zeit\\.hyperterm$",
                                          "^co\\.zeit\\.hyper$",
                                          "^io\\.alacritty$",
                                          "^net\\.kovidgoyal\\.kitty$",
                                          "^org\\.vim\\.",
                                          "^com\\.qvacua\\.VimR$",
                                          "^com\\.vmware\\.fusion$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.vmware\\.view$",
                                          "^com\\.parallels\\.desktop$",
                                          "^com\\.parallels\\.vm$",
                                          "^com\\.parallels\\.desktop\\.console$",
                                          "^org\\.virtualbox\\.app\\.VirtualBoxVM$",
                                          "^com\\.citrix\\.XenAppViewer$",
                                          "^com\\.vmware\\.proxyApp\\.",
                                          "^com\\.parallels\\.winapp\\.",
                                          "^org\\.x\\.X11$",
                                          "^com\\.apple\\.x11$",
                                          "^org\\.macosforge\\.xquartz\\.X11$",
                                          "^org\\.macports\\.X11$",
                                          "^com\\.sublimetext\\.",
                                          "^com\\.microsoft\\.VSCode$",
                                          "^com\\.culturedcode\\.ThingsMac"
                                      ],
                                      "type": "frontmost_application_unless"
                                  }
                              ],
                              "from": {
                                  "key_code": "i",
                                  "modifiers": {
                                      "mandatory": [
                                          "control"
                                      ],
                                      "optional": [
                                          "caps_lock",
                                          "shift"
                                      ]
                                  }
                              },
                              "to": [
                                  {
                                      "key_code": "tab"
                                  }
                              ],
                              "type": "basic"
                          },
                          {
                              "conditions": [
                                  {
                                      "keyboard_types": [
                                          "ansi",
                                          "iso"
                                      ],
                                      "type": "keyboard_type_if"
                                  }
                              ],
                              "from": {
                                  "key_code": "open_bracket",
                                  "modifiers": {
                                      "mandatory": [
                                          "control"
                                      ],
                                      "optional": [
                                          "caps_lock"
                                      ]
                                  }
                              },
                              "to": [
                                  {
                                      "key_code": "escape"
                                  }
                              ],
                              "type": "basic"
                          },
                          {
                              "conditions": [
                                  {
                                      "keyboard_types": [
                                          "jis"
                                      ],
                                      "type": "keyboard_type_if"
                                  }
                              ],
                              "from": {
                                  "key_code": "close_bracket",
                                  "modifiers": {
                                      "mandatory": [
                                          "control"
                                      ],
                                      "optional": [
                                          "caps_lock"
                                      ]
                                  }
                              },
                              "to": [
                                  {
                                      "key_code": "escape"
                                  }
                              ],
                              "type": "basic"
                          },
                          {
                              "from": {
                                  "key_code": "m",
                                  "modifiers": {
                                      "mandatory": [
                                          "control"
                                      ],
                                      "optional": [
                                          "caps_lock",
                                          "shift",
                                          "option"
                                      ]
                                  }
                              },
                              "to": [
                                  {
                                      "key_code": "return_or_enter"
                                  }
                              ],
                              "type": "basic"
                          },
                          {
                              "conditions": [
                                  {
                                      "bundle_identifiers": [
                                          "^org\\.gnu\\.Emacs$",
                                          "^org\\.gnu\\.AquamacsEmacs$",
                                          "^org\\.gnu\\.Aquamacs$",
                                          "^org\\.pqrs\\.unknownapp.conkeror$",
                                          "^com\\.microsoft\\.rdc$",
                                          "^com\\.microsoft\\.rdc\\.mac$",
                                          "^com\\.microsoft\\.rdc\\.macos$",
                                          "^com\\.microsoft\\.rdc\\.osx\\.beta$",
                                          "^net\\.sf\\.cord$",
                                          "^com\\.thinomenon\\.RemoteDesktopConnection$",
                                          "^com\\.itap-mobile\\.qmote$",
                                          "^com\\.nulana\\.remotixmac$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer\\.web$",
                                          "^com\\.teamviewer\\.TeamViewer$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.2X\\.Client\\.Mac$",
                                          "^com\\.apple\\.Terminal$",
                                          "^com\\.googlecode\\.iterm2$",
                                          "^co\\.zeit\\.hyperterm$",
                                          "^co\\.zeit\\.hyper$",
                                          "^io\\.alacritty$",
                                          "^net\\.kovidgoyal\\.kitty$",
                                          "^org\\.vim\\.",
                                          "^com\\.qvacua\\.VimR$",
                                          "^com\\.vmware\\.fusion$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.vmware\\.view$",
                                          "^com\\.parallels\\.desktop$",
                                          "^com\\.parallels\\.vm$",
                                          "^com\\.parallels\\.desktop\\.console$",
                                          "^org\\.virtualbox\\.app\\.VirtualBoxVM$",
                                          "^com\\.citrix\\.XenAppViewer$",
                                          "^com\\.vmware\\.proxyApp\\.",
                                          "^com\\.parallels\\.winapp\\.",
                                          "^org\\.x\\.X11$",
                                          "^com\\.apple\\.x11$",
                                          "^org\\.macosforge\\.xquartz\\.X11$",
                                          "^org\\.macports\\.X11$",
                                          "^com\\.sublimetext\\.",
                                          "^com\\.microsoft\\.VSCode$",
                                          "^com\\.culturedcode\\.ThingsMac"
                                      ],
                                      "type": "frontmost_application_unless"
                                  }
                              ],
                              "from": {
                                  "key_code": "b",
                                  "modifiers": {
                                      "mandatory": [
                                          "control"
                                      ],
                                      "optional": [
                                          "caps_lock",
                                          "shift",
                                          "option"
                                      ]
                                  }
                              },
                              "to": [
                                  {
                                      "key_code": "left_arrow"
                                  }
                              ],
                              "type": "basic"
                          },
                          {
                              "conditions": [
                                  {
                                      "bundle_identifiers": [
                                          "^org\\.gnu\\.Emacs$",
                                          "^org\\.gnu\\.AquamacsEmacs$",
                                          "^org\\.gnu\\.Aquamacs$",
                                          "^org\\.pqrs\\.unknownapp.conkeror$",
                                          "^com\\.microsoft\\.rdc$",
                                          "^com\\.microsoft\\.rdc\\.mac$",
                                          "^com\\.microsoft\\.rdc\\.macos$",
                                          "^com\\.microsoft\\.rdc\\.osx\\.beta$",
                                          "^net\\.sf\\.cord$",
                                          "^com\\.thinomenon\\.RemoteDesktopConnection$",
                                          "^com\\.itap-mobile\\.qmote$",
                                          "^com\\.nulana\\.remotixmac$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer\\.web$",
                                          "^com\\.teamviewer\\.TeamViewer$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.2X\\.Client\\.Mac$",
                                          "^com\\.apple\\.Terminal$",
                                          "^com\\.googlecode\\.iterm2$",
                                          "^co\\.zeit\\.hyperterm$",
                                          "^co\\.zeit\\.hyper$",
                                          "^io\\.alacritty$",
                                          "^net\\.kovidgoyal\\.kitty$",
                                          "^org\\.vim\\.",
                                          "^com\\.qvacua\\.VimR$",
                                          "^com\\.vmware\\.fusion$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.vmware\\.view$",
                                          "^com\\.parallels\\.desktop$",
                                          "^com\\.parallels\\.vm$",
                                          "^com\\.parallels\\.desktop\\.console$",
                                          "^org\\.virtualbox\\.app\\.VirtualBoxVM$",
                                          "^com\\.citrix\\.XenAppViewer$",
                                          "^com\\.vmware\\.proxyApp\\.",
                                          "^com\\.parallels\\.winapp\\.",
                                          "^org\\.x\\.X11$",
                                          "^com\\.apple\\.x11$",
                                          "^org\\.macosforge\\.xquartz\\.X11$",
                                          "^org\\.macports\\.X11$",
                                          "^com\\.sublimetext\\.",
                                          "^com\\.microsoft\\.VSCode$",
                                          "^com\\.culturedcode\\.ThingsMac"
                                      ],
                                      "type": "frontmost_application_unless"
                                  }
                              ],
                              "from": {
                                  "key_code": "f",
                                  "modifiers": {
                                      "mandatory": [
                                          "control"
                                      ],
                                      "optional": [
                                          "caps_lock",
                                          "shift",
                                          "option"
                                      ]
                                  }
                              },
                              "to": [
                                  {
                                      "key_code": "right_arrow"
                                  }
                              ],
                              "type": "basic"
                          },
                          {
                              "conditions": [
                                  {
                                      "bundle_identifiers": [
                                          "^org\\.gnu\\.Emacs$",
                                          "^org\\.gnu\\.AquamacsEmacs$",
                                          "^org\\.gnu\\.Aquamacs$",
                                          "^org\\.pqrs\\.unknownapp.conkeror$",
                                          "^com\\.microsoft\\.rdc$",
                                          "^com\\.microsoft\\.rdc\\.mac$",
                                          "^com\\.microsoft\\.rdc\\.macos$",
                                          "^com\\.microsoft\\.rdc\\.osx\\.beta$",
                                          "^net\\.sf\\.cord$",
                                          "^com\\.thinomenon\\.RemoteDesktopConnection$",
                                          "^com\\.itap-mobile\\.qmote$",
                                          "^com\\.nulana\\.remotixmac$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer\\.web$",
                                          "^com\\.teamviewer\\.TeamViewer$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.2X\\.Client\\.Mac$",
                                          "^com\\.apple\\.Terminal$",
                                          "^com\\.googlecode\\.iterm2$",
                                          "^co\\.zeit\\.hyperterm$",
                                          "^co\\.zeit\\.hyper$",
                                          "^io\\.alacritty$",
                                          "^net\\.kovidgoyal\\.kitty$",
                                          "^org\\.vim\\.",
                                          "^com\\.qvacua\\.VimR$",
                                          "^com\\.vmware\\.fusion$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.vmware\\.view$",
                                          "^com\\.parallels\\.desktop$",
                                          "^com\\.parallels\\.vm$",
                                          "^com\\.parallels\\.desktop\\.console$",
                                          "^org\\.virtualbox\\.app\\.VirtualBoxVM$",
                                          "^com\\.citrix\\.XenAppViewer$",
                                          "^com\\.vmware\\.proxyApp\\.",
                                          "^com\\.parallels\\.winapp\\.",
                                          "^org\\.x\\.X11$",
                                          "^com\\.apple\\.x11$",
                                          "^org\\.macosforge\\.xquartz\\.X11$",
                                          "^org\\.macports\\.X11$",
                                          "^com\\.sublimetext\\.",
                                          "^com\\.microsoft\\.VSCode$",
                                          "^com\\.culturedcode\\.ThingsMac"
                                      ],
                                      "type": "frontmost_application_unless"
                                  }
                              ],
                              "from": {
                                  "key_code": "n",
                                  "modifiers": {
                                      "mandatory": [
                                          "control"
                                      ],
                                      "optional": [
                                          "caps_lock",
                                          "shift",
                                          "option"
                                      ]
                                  }
                              },
                              "to": [
                                  {
                                      "key_code": "down_arrow"
                                  }
                              ],
                              "type": "basic"
                          },
                          {
                              "conditions": [
                                  {
                                      "bundle_identifiers": [
                                          "^org\\.gnu\\.Emacs$",
                                          "^org\\.gnu\\.AquamacsEmacs$",
                                          "^org\\.gnu\\.Aquamacs$",
                                          "^org\\.pqrs\\.unknownapp.conkeror$",
                                          "^com\\.microsoft\\.rdc$",
                                          "^com\\.microsoft\\.rdc\\.mac$",
                                          "^com\\.microsoft\\.rdc\\.macos$",
                                          "^com\\.microsoft\\.rdc\\.osx\\.beta$",
                                          "^net\\.sf\\.cord$",
                                          "^com\\.thinomenon\\.RemoteDesktopConnection$",
                                          "^com\\.itap-mobile\\.qmote$",
                                          "^com\\.nulana\\.remotixmac$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer\\.web$",
                                          "^com\\.teamviewer\\.TeamViewer$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.2X\\.Client\\.Mac$",
                                          "^com\\.apple\\.Terminal$",
                                          "^com\\.googlecode\\.iterm2$",
                                          "^co\\.zeit\\.hyperterm$",
                                          "^co\\.zeit\\.hyper$",
                                          "^io\\.alacritty$",
                                          "^net\\.kovidgoyal\\.kitty$",
                                          "^org\\.vim\\.",
                                          "^com\\.qvacua\\.VimR$",
                                          "^com\\.vmware\\.fusion$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.vmware\\.view$",
                                          "^com\\.parallels\\.desktop$",
                                          "^com\\.parallels\\.vm$",
                                          "^com\\.parallels\\.desktop\\.console$",
                                          "^org\\.virtualbox\\.app\\.VirtualBoxVM$",
                                          "^com\\.citrix\\.XenAppViewer$",
                                          "^com\\.vmware\\.proxyApp\\.",
                                          "^com\\.parallels\\.winapp\\.",
                                          "^org\\.x\\.X11$",
                                          "^com\\.apple\\.x11$",
                                          "^org\\.macosforge\\.xquartz\\.X11$",
                                          "^org\\.macports\\.X11$",
                                          "^com\\.sublimetext\\.",
                                          "^com\\.microsoft\\.VSCode$",
                                          "^com\\.culturedcode\\.ThingsMac"
                                      ],
                                      "type": "frontmost_application_unless"
                                  }
                              ],
                              "from": {
                                  "key_code": "p",
                                  "modifiers": {
                                      "mandatory": [
                                          "control"
                                      ],
                                      "optional": [
                                          "caps_lock",
                                          "shift",
                                          "option"
                                      ]
                                  }
                              },
                              "to": [
                                  {
                                      "key_code": "up_arrow"
                                  }
                              ],
                              "type": "basic"
                          },
                          {
                              "conditions": [
                                  {
                                      "bundle_identifiers": [
                                          "^org\\.gnu\\.Emacs$",
                                          "^org\\.gnu\\.AquamacsEmacs$",
                                          "^org\\.gnu\\.Aquamacs$",
                                          "^org\\.pqrs\\.unknownapp.conkeror$",
                                          "^com\\.microsoft\\.rdc$",
                                          "^com\\.microsoft\\.rdc\\.mac$",
                                          "^com\\.microsoft\\.rdc\\.macos$",
                                          "^com\\.microsoft\\.rdc\\.osx\\.beta$",
                                          "^net\\.sf\\.cord$",
                                          "^com\\.thinomenon\\.RemoteDesktopConnection$",
                                          "^com\\.itap-mobile\\.qmote$",
                                          "^com\\.nulana\\.remotixmac$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer\\.web$",
                                          "^com\\.teamviewer\\.TeamViewer$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.2X\\.Client\\.Mac$",
                                          "^com\\.apple\\.Terminal$",
                                          "^com\\.googlecode\\.iterm2$",
                                          "^co\\.zeit\\.hyperterm$",
                                          "^co\\.zeit\\.hyper$",
                                          "^io\\.alacritty$",
                                          "^net\\.kovidgoyal\\.kitty$",
                                          "^org\\.vim\\.",
                                          "^com\\.qvacua\\.VimR$",
                                          "^com\\.vmware\\.fusion$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.vmware\\.view$",
                                          "^com\\.parallels\\.desktop$",
                                          "^com\\.parallels\\.vm$",
                                          "^com\\.parallels\\.desktop\\.console$",
                                          "^org\\.virtualbox\\.app\\.VirtualBoxVM$",
                                          "^com\\.citrix\\.XenAppViewer$",
                                          "^com\\.vmware\\.proxyApp\\.",
                                          "^com\\.parallels\\.winapp\\.",
                                          "^org\\.x\\.X11$",
                                          "^com\\.apple\\.x11$",
                                          "^org\\.macosforge\\.xquartz\\.X11$",
                                          "^org\\.macports\\.X11$",
                                          "^com\\.sublimetext\\.",
                                          "^com\\.microsoft\\.VSCode$",
                                          "^com\\.culturedcode\\.ThingsMac"
                                      ],
                                      "type": "frontmost_application_unless"
                                  }
                              ],
                              "from": {
                                  "key_code": "v",
                                  "modifiers": {
                                      "mandatory": [
                                          "control"
                                      ],
                                      "optional": [
                                          "caps_lock",
                                          "shift"
                                      ]
                                  }
                              },
                              "to": [
                                  {
                                      "key_code": "page_down"
                                  }
                              ],
                              "type": "basic"
                          },
                          {
                              "conditions": [
                                  {
                                      "bundle_identifiers": [
                                          "^com\\.microsoft\\.Excel$",
                                          "^com\\.microsoft\\.Powerpoint$",
                                          "^com\\.microsoft\\.Word$"
                                      ],
                                      "type": "frontmost_application_if"
                                  }
                              ],
                              "from": {
                                  "key_code": "a",
                                  "modifiers": {
                                      "mandatory": [
                                          "control"
                                      ],
                                      "optional": [
                                          "caps_lock",
                                          "shift"
                                      ]
                                  }
                              },
                              "to": [
                                  {
                                      "key_code": "home"
                                  }
                              ],
                              "type": "basic"
                          },
                          {
                              "conditions": [
                                  {
                                      "bundle_identifiers": [
                                          "^com\\.microsoft\\.Excel$",
                                          "^com\\.microsoft\\.Powerpoint$",
                                          "^com\\.microsoft\\.Word$"
                                      ],
                                      "type": "frontmost_application_if"
                                  }
                              ],
                              "from": {
                                  "key_code": "e",
                                  "modifiers": {
                                      "mandatory": [
                                          "control"
                                      ],
                                      "optional": [
                                          "caps_lock",
                                          "shift"
                                      ]
                                  }
                              },
                              "to": [
                                  {
                                      "key_code": "end"
                                  }
                              ],
                              "type": "basic"
                          },
                          {
                              "conditions": [
                                  {
                                      "bundle_identifiers": [
                                          "^org\\.eclipse\\.platform\\.ide$"
                                      ],
                                      "type": "frontmost_application_if"
                                  }
                              ],
                              "from": {
                                  "key_code": "a",
                                  "modifiers": {
                                      "mandatory": [
                                          "control"
                                      ],
                                      "optional": [
                                          "caps_lock",
                                          "shift"
                                      ]
                                  }
                              },
                              "to": [
                                  {
                                      "key_code": "left_arrow",
                                      "modifiers": [
                                          "left_command"
                                      ]
                                  }
                              ],
                              "type": "basic"
                          },
                          {
                              "conditions": [
                                  {
                                      "bundle_identifiers": [
                                          "^org\\.eclipse\\.platform\\.ide$"
                                      ],
                                      "type": "frontmost_application_if"
                                  }
                              ],
                              "from": {
                                  "key_code": "e",
                                  "modifiers": {
                                      "mandatory": [
                                          "control"
                                      ],
                                      "optional": [
                                          "caps_lock",
                                          "shift"
                                      ]
                                  }
                              },
                              "to": [
                                  {
                                      "key_code": "right_arrow",
                                      "modifiers": [
                                          "left_command"
                                      ]
                                  }
                              ],
                              "type": "basic"
                          }
                      ]
                  },
                  {
                      "description": "Emacs key bindings [option+keys] (rev 5)",
                      "manipulators": [
                          {
                              "conditions": [
                                  {
                                      "bundle_identifiers": [
                                          "^org\\.gnu\\.Emacs$",
                                          "^org\\.gnu\\.AquamacsEmacs$",
                                          "^org\\.gnu\\.Aquamacs$",
                                          "^org\\.pqrs\\.unknownapp.conkeror$",
                                          "^com\\.microsoft\\.rdc$",
                                          "^com\\.microsoft\\.rdc\\.mac$",
                                          "^com\\.microsoft\\.rdc\\.macos$",
                                          "^com\\.microsoft\\.rdc\\.osx\\.beta$",
                                          "^net\\.sf\\.cord$",
                                          "^com\\.thinomenon\\.RemoteDesktopConnection$",
                                          "^com\\.itap-mobile\\.qmote$",
                                          "^com\\.nulana\\.remotixmac$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer\\.web$",
                                          "^com\\.teamviewer\\.TeamViewer$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.2X\\.Client\\.Mac$",
                                          "^com\\.apple\\.Terminal$",
                                          "^com\\.googlecode\\.iterm2$",
                                          "^co\\.zeit\\.hyperterm$",
                                          "^co\\.zeit\\.hyper$",
                                          "^io\\.alacritty$",
                                          "^net\\.kovidgoyal\\.kitty$",
                                          "^org\\.vim\\.",
                                          "^com\\.qvacua\\.VimR$",
                                          "^com\\.vmware\\.fusion$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.vmware\\.view$",
                                          "^com\\.parallels\\.desktop$",
                                          "^com\\.parallels\\.vm$",
                                          "^com\\.parallels\\.desktop\\.console$",
                                          "^org\\.virtualbox\\.app\\.VirtualBoxVM$",
                                          "^com\\.citrix\\.XenAppViewer$",
                                          "^com\\.vmware\\.proxyApp\\.",
                                          "^com\\.parallels\\.winapp\\.",
                                          "^org\\.x\\.X11$",
                                          "^com\\.apple\\.x11$",
                                          "^org\\.macosforge\\.xquartz\\.X11$",
                                          "^org\\.macports\\.X11$",
                                          "^com\\.sublimetext\\.",
                                          "^com\\.microsoft\\.VSCode$",
                                          "^com\\.culturedcode\\.ThingsMac"
                                      ],
                                      "type": "frontmost_application_unless"
                                  }
                              ],
                              "from": {
                                  "key_code": "v",
                                  "modifiers": {
                                      "mandatory": [
                                          "option"
                                      ],
                                      "optional": [
                                          "caps_lock",
                                          "shift"
                                      ]
                                  }
                              },
                              "to": [
                                  {
                                      "key_code": "page_up"
                                  }
                              ],
                              "type": "basic"
                          },
                          {
                              "conditions": [
                                  {
                                      "bundle_identifiers": [
                                          "^org\\.gnu\\.Emacs$",
                                          "^org\\.gnu\\.AquamacsEmacs$",
                                          "^org\\.gnu\\.Aquamacs$",
                                          "^org\\.pqrs\\.unknownapp.conkeror$",
                                          "^com\\.microsoft\\.rdc$",
                                          "^com\\.microsoft\\.rdc\\.mac$",
                                          "^com\\.microsoft\\.rdc\\.macos$",
                                          "^com\\.microsoft\\.rdc\\.osx\\.beta$",
                                          "^net\\.sf\\.cord$",
                                          "^com\\.thinomenon\\.RemoteDesktopConnection$",
                                          "^com\\.itap-mobile\\.qmote$",
                                          "^com\\.nulana\\.remotixmac$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer\\.web$",
                                          "^com\\.teamviewer\\.TeamViewer$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.2X\\.Client\\.Mac$",
                                          "^com\\.apple\\.Terminal$",
                                          "^com\\.googlecode\\.iterm2$",
                                          "^co\\.zeit\\.hyperterm$",
                                          "^co\\.zeit\\.hyper$",
                                          "^io\\.alacritty$",
                                          "^net\\.kovidgoyal\\.kitty$",
                                          "^org\\.vim\\.",
                                          "^com\\.qvacua\\.VimR$",
                                          "^com\\.vmware\\.fusion$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.vmware\\.view$",
                                          "^com\\.parallels\\.desktop$",
                                          "^com\\.parallels\\.vm$",
                                          "^com\\.parallels\\.desktop\\.console$",
                                          "^org\\.virtualbox\\.app\\.VirtualBoxVM$",
                                          "^com\\.citrix\\.XenAppViewer$",
                                          "^com\\.vmware\\.proxyApp\\.",
                                          "^com\\.parallels\\.winapp\\.",
                                          "^org\\.x\\.X11$",
                                          "^com\\.apple\\.x11$",
                                          "^org\\.macosforge\\.xquartz\\.X11$",
                                          "^org\\.macports\\.X11$",
                                          "^com\\.sublimetext\\.",
                                          "^com\\.microsoft\\.VSCode$",
                                          "^com\\.culturedcode\\.ThingsMac"
                                      ],
                                      "type": "frontmost_application_unless"
                                  }
                              ],
                              "from": {
                                  "key_code": "b",
                                  "modifiers": {
                                      "mandatory": [
                                          "option"
                                      ],
                                      "optional": [
                                          "caps_lock",
                                          "shift"
                                      ]
                                  }
                              },
                              "to": [
                                  {
                                      "key_code": "left_arrow",
                                      "modifiers": [
                                          "left_option"
                                      ]
                                  }
                              ],
                              "type": "basic"
                          },
                          {
                              "conditions": [
                                  {
                                      "bundle_identifiers": [
                                          "^org\\.gnu\\.Emacs$",
                                          "^org\\.gnu\\.AquamacsEmacs$",
                                          "^org\\.gnu\\.Aquamacs$",
                                          "^org\\.pqrs\\.unknownapp.conkeror$",
                                          "^com\\.microsoft\\.rdc$",
                                          "^com\\.microsoft\\.rdc\\.mac$",
                                          "^com\\.microsoft\\.rdc\\.macos$",
                                          "^com\\.microsoft\\.rdc\\.osx\\.beta$",
                                          "^net\\.sf\\.cord$",
                                          "^com\\.thinomenon\\.RemoteDesktopConnection$",
                                          "^com\\.itap-mobile\\.qmote$",
                                          "^com\\.nulana\\.remotixmac$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer\\.web$",
                                          "^com\\.teamviewer\\.TeamViewer$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.2X\\.Client\\.Mac$",
                                          "^com\\.apple\\.Terminal$",
                                          "^com\\.googlecode\\.iterm2$",
                                          "^co\\.zeit\\.hyperterm$",
                                          "^co\\.zeit\\.hyper$",
                                          "^io\\.alacritty$",
                                          "^net\\.kovidgoyal\\.kitty$",
                                          "^org\\.vim\\.",
                                          "^com\\.qvacua\\.VimR$",
                                          "^com\\.vmware\\.fusion$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.vmware\\.view$",
                                          "^com\\.parallels\\.desktop$",
                                          "^com\\.parallels\\.vm$",
                                          "^com\\.parallels\\.desktop\\.console$",
                                          "^org\\.virtualbox\\.app\\.VirtualBoxVM$",
                                          "^com\\.citrix\\.XenAppViewer$",
                                          "^com\\.vmware\\.proxyApp\\.",
                                          "^com\\.parallels\\.winapp\\.",
                                          "^org\\.x\\.X11$",
                                          "^com\\.apple\\.x11$",
                                          "^org\\.macosforge\\.xquartz\\.X11$",
                                          "^org\\.macports\\.X11$",
                                          "^com\\.sublimetext\\.",
                                          "^com\\.microsoft\\.VSCode$",
                                          "^com\\.culturedcode\\.ThingsMac"
                                      ],
                                      "type": "frontmost_application_unless"
                                  }
                              ],
                              "from": {
                                  "key_code": "f",
                                  "modifiers": {
                                      "mandatory": [
                                          "option"
                                      ],
                                      "optional": [
                                          "caps_lock",
                                          "shift"
                                      ]
                                  }
                              },
                              "to": [
                                  {
                                      "key_code": "right_arrow",
                                      "modifiers": [
                                          "left_option"
                                      ]
                                  }
                              ],
                              "type": "basic"
                          },
                          {
                              "conditions": [
                                  {
                                      "bundle_identifiers": [
                                          "^org\\.gnu\\.Emacs$",
                                          "^org\\.gnu\\.AquamacsEmacs$",
                                          "^org\\.gnu\\.Aquamacs$",
                                          "^org\\.pqrs\\.unknownapp.conkeror$",
                                          "^com\\.microsoft\\.rdc$",
                                          "^com\\.microsoft\\.rdc\\.mac$",
                                          "^com\\.microsoft\\.rdc\\.macos$",
                                          "^com\\.microsoft\\.rdc\\.osx\\.beta$",
                                          "^net\\.sf\\.cord$",
                                          "^com\\.thinomenon\\.RemoteDesktopConnection$",
                                          "^com\\.itap-mobile\\.qmote$",
                                          "^com\\.nulana\\.remotixmac$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer$",
                                          "^com\\.p5sys\\.jump\\.mac\\.viewer\\.web$",
                                          "^com\\.teamviewer\\.TeamViewer$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.2X\\.Client\\.Mac$",
                                          "^com\\.apple\\.Terminal$",
                                          "^com\\.googlecode\\.iterm2$",
                                          "^co\\.zeit\\.hyperterm$",
                                          "^co\\.zeit\\.hyper$",
                                          "^io\\.alacritty$",
                                          "^net\\.kovidgoyal\\.kitty$",
                                          "^org\\.vim\\.",
                                          "^com\\.qvacua\\.VimR$",
                                          "^com\\.vmware\\.fusion$",
                                          "^com\\.vmware\\.horizon$",
                                          "^com\\.vmware\\.view$",
                                          "^com\\.parallels\\.desktop$",
                                          "^com\\.parallels\\.vm$",
                                          "^com\\.parallels\\.desktop\\.console$",
                                          "^org\\.virtualbox\\.app\\.VirtualBoxVM$",
                                          "^com\\.citrix\\.XenAppViewer$",
                                          "^com\\.vmware\\.proxyApp\\.",
                                          "^com\\.parallels\\.winapp\\.",
                                          "^org\\.x\\.X11$",
                                          "^com\\.apple\\.x11$",
                                          "^org\\.macosforge\\.xquartz\\.X11$",
                                          "^org\\.macports\\.X11$",
                                          "^com\\.sublimetext\\.",
                                          "^com\\.microsoft\\.VSCode$",
                                          "^com\\.culturedcode\\.ThingsMac"
                                      ],
                                      "type": "frontmost_application_unless"
                                  }
                              ],
                              "from": {
                                  "key_code": "d",
                                  "modifiers": {
                                      "mandatory": [
                                          "option"
                                      ],
                                      "optional": [
                                          "caps_lock"
                                      ]
                                  }
                              },
                              "to": [
                                  {
                                      "key_code": "delete_forward",
                                      "modifiers": [
                                          "left_option"
                                      ]
                                  }
                              ],
                              "type": "basic"
                          }
                      ]
                  }
              ]
          },
          "devices": [
              {
                  "disable_built_in_keyboard_if_exists": false,
                  "fn_function_keys": [],
                  "identifiers": {
                      "is_keyboard": true,
                      "is_pointing_device": false,
                      "product_id": 50475,
                      "vendor_id": 1133
                  },
                  "ignore": true,
                  "manipulate_caps_lock_led": false,
                  "simple_modifications": []
              },
              {
                  "disable_built_in_keyboard_if_exists": false,
                  "fn_function_keys": [],
                  "identifiers": {
                      "is_keyboard": true,
                      "is_pointing_device": false,
                      "product_id": 636,
                      "vendor_id": 1452
                  },
                  "ignore": false,
                  "manipulate_caps_lock_led": true,
                  "simple_modifications": [
                      {
                          "from": {
                              "key_code": "caps_lock"
                          },
                          "to": {
                              "key_code": "left_control"
                          }
                      }
                  ]
              },
              {
                  "disable_built_in_keyboard_if_exists": false,
                  "fn_function_keys": [],
                  "identifiers": {
                      "is_keyboard": true,
                      "is_pointing_device": false,
                      "product_id": 2311,
                      "vendor_id": 7847
                  },
                  "ignore": false,
                  "manipulate_caps_lock_led": false,
                  "simple_modifications": [
                      {
                          "from": {
                              "key_code": "caps_lock"
                          },
                          "to": {
                              "key_code": "left_control"
                          }
                      },
                      {
                          "from": {
                              "key_code": "left_command"
                          },
                          "to": {
                              "key_code": "left_option"
                          }
                      },
                      {
                          "from": {
                              "key_code": "left_option"
                          },
                          "to": {
                              "key_code": "left_command"
                          }
                      },
                      {
                          "from": {
                              "key_code": "right_command"
                          },
                          "to": {
                              "key_code": "right_option"
                          }
                      },
                      {
                          "from": {
                              "key_code": "right_option"
                          },
                          "to": {
                              "key_code": "right_command"
                          }
                      }
                  ]
              },
              {
                  "disable_built_in_keyboard_if_exists": false,
                  "fn_function_keys": [
                      {
                          "from": {
                              "key_code": "f1"
                          },
                          "to": {
                              "key_code": "f1"
                          }
                      },
                      {
                          "from": {
                              "key_code": "f2"
                          },
                          "to": {
                              "key_code": "f2"
                          }
                      },
                      {
                          "from": {
                              "key_code": "f3"
                          },
                          "to": {
                              "key_code": "f3"
                          }
                      },
                      {
                          "from": {
                              "key_code": "f4"
                          },
                          "to": {
                              "key_code": "f4"
                          }
                      },
                      {
                          "from": {
                              "key_code": "f5"
                          },
                          "to": {
                              "key_code": "f5"
                          }
                      },
                      {
                          "from": {
                              "key_code": "f6"
                          },
                          "to": {
                              "key_code": "f6"
                          }
                      },
                      {
                          "from": {
                              "key_code": "f7"
                          },
                          "to": {
                              "key_code": "f7"
                          }
                      },
                      {
                          "from": {
                              "key_code": "f8"
                          },
                          "to": {
                              "key_code": "f8"
                          }
                      },
                      {
                          "from": {
                              "key_code": "f9"
                          },
                          "to": {
                              "key_code": "f9"
                          }
                      },
                      {
                          "from": {
                              "key_code": "f10"
                          },
                          "to": {
                              "key_code": "f10"
                          }
                      },
                      {
                          "from": {
                              "key_code": "f11"
                          },
                          "to": {
                              "key_code": "f11"
                          }
                      },
                      {
                          "from": {
                              "key_code": "f12"
                          },
                          "to": {
                              "key_code": "f12"
                          }
                      }
                  ],
                  "identifiers": {
                      "is_keyboard": true,
                      "is_pointing_device": true,
                      "product_id": 0,
                      "vendor_id": 0
                  },
                  "ignore": false,
                  "manipulate_caps_lock_led": false,
                  "simple_modifications": []
              }
          ],
          "fn_function_keys": [
              {
                  "from": {
                      "key_code": "f1"
                  },
                  "to": {
                      "consumer_key_code": "display_brightness_decrement"
                  }
              },
              {
                  "from": {
                      "key_code": "f2"
                  },
                  "to": {
                      "consumer_key_code": "display_brightness_increment"
                  }
              },
              {
                  "from": {
                      "key_code": "f3"
                  },
                  "to": {
                      "key_code": "mission_control"
                  }
              },
              {
                  "from": {
                      "key_code": "f4"
                  },
                  "to": {
                      "key_code": "launchpad"
                  }
              },
              {
                  "from": {
                      "key_code": "f5"
                  },
                  "to": {
                      "key_code": "illumination_decrement"
                  }
              },
              {
                  "from": {
                      "key_code": "f6"
                  },
                  "to": {
                      "key_code": "illumination_increment"
                  }
              },
              {
                  "from": {
                      "key_code": "f7"
                  },
                  "to": {
                      "consumer_key_code": "rewind"
                  }
              },
              {
                  "from": {
                      "key_code": "f8"
                  },
                  "to": {
                      "consumer_key_code": "play_or_pause"
                  }
              },
              {
                  "from": {
                      "key_code": "f9"
                  },
                  "to": {
                      "consumer_key_code": "fastforward"
                  }
              },
              {
                  "from": {
                      "key_code": "f10"
                  },
                  "to": {
                      "consumer_key_code": "mute"
                  }
              },
              {
                  "from": {
                      "key_code": "f11"
                  },
                  "to": {
                      "consumer_key_code": "volume_decrement"
                  }
              },
              {
                  "from": {
                      "key_code": "f12"
                  },
                  "to": {
                      "consumer_key_code": "volume_increment"
                  }
              }
          ],
          "name": "Emacs",
          "parameters": {
              "delay_milliseconds_before_open_device": 1000
          },
          "selected": true,
          "simple_modifications": [],
          "virtual_hid_keyboard": {
              "country_code": 0,
              "mouse_key_xy_scale": 100
          }
      }
  ]
};

