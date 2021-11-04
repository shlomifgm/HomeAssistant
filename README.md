# Shlomi'f Home Assistant configuration

I’m using Lovelace mostly for my mobile devices and for Wallpanel tablet which some times used with 
HaDashboard instead.

The UI is partially isnspired by [Homekit Infused](https://github.com/jimz011/homekit-infused), 
implemented by me using mostly Custom Button Card and Delluttering Card for the templates.



Please join me in [![Discord](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.com/channels/903416013532561520/903416013532561526) , welcome to visit 
and ask questions.

<a href="https://www.paypal.me/sfh182" target="_blank"><img height="41px" width="167px" 
src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee"></a>

![alt text](https://github.com/shlomifgm/HomeAssistant/blob/master/www/screens/banner.png "Banner")
## Features
- HomeKit style design using [Button Card](https://github.com/custom-cards/button-card)
- HomeKit style dynamic badges for People, Lights, Motion sensors and Climate devices.
- Templating with [Decluttering Card](https://github.com/custom-cards/decluttering-card)
- Responsive design using CSS Grid with [Layout Card](https://github.com/thomasloven/lovelace-layout-card)
- Dark and Light themes created specially for this design, automatically changing.
- Setting the header to the buttom and customizing it, all as part of the themes using [Card Mod]
(https://github.com/thomasloven/lovelace-card-mod)
- Popups with [Browser Mod](https://github.com/thomasloven/hass-browser_mod)
- Two colored SVG icons made by me from Material Design Icons, took the idea from [This Guy](https://community.home-assistant.io/t/a-different-take-on-designing-a-lovelace-ui/162594) 

## Status Information

| [![GitHub Activity][commits-shield]][commits] | [![GitHub Last Commit][last-commit-shield]][commits]|
|:---:|:---:|
| Shows how active I am with this repo annually | This shows how up to date this repo is |
| [![GitHub issues][issues-shield]][issues] | [![HA Version][ha-version-shield]][home-assistant] |
| I now use the issues as a TODO list | This is the version that I am currently running with Home Assistant |
| [![GitHub Stars][stars-shield]][stars] | [![Buy Me A Coffee][paypal-shield]][paypal] |
| Please :star: this repo if you find it useful, like these people have | If this config was very helpfull, you could buy a coffee :coffee: for me :smile: |

## Current Configuration

Recently I switched from a raspberry pi 4B to an Intel NUC. I noticed that the Pi for my house was no longer powerful enough to run all processes. That is why I invested in an Intel NUC, which is now smoothly running. I also switched from hassbian to [Home Assistant - Supervised][hassio] in docker.

## My HA Server

Below my server setup on which I run Home Assistant:

- [Intel Gigabyte GB-BLCE-4105C][intel-Gigabyte] - Inside it 4GB Ram, 500GB SSD and running [Ubuntu Server LTS][ubuntu-server].
- Using the [Hass.io installation][hassio-install].
- [Sonoff Zigbee Bridge](<https://sonoff.tech/product/smart-home-security/zbbridge/>) - Zigbee Bridge With Tasmota
- [Sonoff RF Bridge](<https://sonoff.tech/product/smart-home-security/rf-bridge/>) - RF Bridge With Tasmota
- [Broadlink RM Pro](<https://www.ibroadlink.com/products/ir+rf>) - RF & IR Bridge
- [Aqara G2H Camera - Homekit](<https://www.aqara.com/us/g2h_camera_hub.html>) - Inside Camers
- [Reolink Cameras](<https://reolink.com/>) - Outside Cameras
- [Amazon Fire HD10](<https://www.amazon.com/Fire-HD-10/dp/B07K1RZWMC>) - Wall Panel Tablet
- [Apple TV](<https://www.apple.com/il/apple-tv-4k//>) - Apple TV As Bridge For Homekit

### In House   
:house_with_garden:

Curious about what kind of hardware I have in my Home Assistant system? I have a :pencil: list: [Check it out](<https://github.com/shlomifgm/HomeAssistant/blob/master/extras/github_resources/hardware.md>) (Last update: 30 October 2021).

## Grafana energy consumption dashboard

I have built my own dashboard in grafana for my energy consumption, which I can call through an iframe panel in Home Assistant. If you want to know more about this, [take a look here](<https://github.com/shlomifgm/HomeAssistant/blob/master/extras/consumption/README.md>).

## Back-ups
:floppy_disk:

Every day at 2:00 am an [automation makes a snapshot][backup-github] of my installation. In the past it happened that the sd card of my Pi became corrupt and I lost everything. That's why this backup is also made locally on my NAS automatically and this is fully automated. (Inspired by: [@adonno][adonno-github])

## Apps to control

Nothing is better than being able to control your own smart home from your phone or tablet.

- [Home Assistant - Android](<https://play.google.com/store/apps/details?id=io.homeassistant.companion.android>)
- [Home Assistant - iOS](<https://www.home-assistant.io/docs/ecosystem/ios/>)
- [Home Assistant - Web app](<https://www.home-assistant.io/docs/frontend/mobile/>)

---

## Needing Help?

- [Home Assistant Homepage](<https://home-assistant.io/>)
- [Home Assistant Forums](<https://community.home-assistant.io/>)
- [Home Assistant Discord Chat](<https://discord.gg/c5DvZ4e>)
- [Other Featured Home Assistant Configurations](<https://home-assistant.io/cookbook/>)
- [Home Assistant GitHub Source Repository](<https://github.com/home-assistant/home-assistant>)
- [Official Home Assistant Demo](<https://home-assistant.io/demo/>)
### Screens

Mobile:    
![alt text](https://github.com/shlomifgm/HomeAssistant/blob/master/www/screens/mobile_new.png "Mobile")

Wallpanel:     
![alt text](https://github.com/shlomifgm/HomeAssistant/blob/master/www/screens/view_kiosk.png "Wallpanel")


## License

MIT License 


Copyright (c) 2021 Shlomi Fabrikant

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[commits-shield]: https://img.shields.io/github/commit-activity/y/shlomifgm/HomeAssistant.svg
[last-commit-shield]: https://img.shields.io/github/last-commit/shlomifgm/HomeAssistant.svg?color=blue&style=plasticr
[stars-shield]: https://img.shields.io/github/stars/shlomifgm/HomeAssistant.svg
[ha-version-shield]: https://img.shields.io/badge/Home%20Assistant-2021.10.6-blue.svg
[uptime-shield]: https://img.shields.io/uptimerobot/status/m781145866-63b6526d17827ec6eebe586f.svg
[gitlabci-shield]: https://gitlab.com/shlomifgmhome/homeassistant/badges/master/pipeline.svg
[paypal-shield]: https://img.shields.io/badge/Buy_Me_A_Coffee-Paypal-orange.svg
[issues-shield]: https://img.shields.io/github/issues/shlomifgm/HomeAssistant.svg

[commits]: https://github.com/shlomifgm/HomeAssistant/commits/master
[stars]: https://github.com/shlomifgm/HomeAssistant/stargazers
[home-assistant]: https://home-assistant.io
[uptime-robot]: https://uptimerobot.com
[gitlabci]: https://gitlab.com/shlomifgmhome/homeassistant/pipelines
[paypal]: https://www.paypal.me/sfh182
[issues]: https://github.com/shlomifgm/HomeAssistant/issues
[hardware]: https://github.com/shlomifgm/HomeAssistant/blob/master/extras/github_resources/hardware.md

[intel-nuc]: https://www.intel.com/content/www/us/en/products/boards-kits/nuc/kits/nuc7i5bnh.html
[ubuntu-server]: https://www.ubuntu.com/download/server
[hassio-install]: https://www.home-assistant.io/hassio/installation/#alternative-install-on-generic-linux-server
[hassio]: https://www.home-assistant.io/hassio/
[adonno-github]: https://github.com/adonno/Home-AssistantConfig
[backup-github]: https://github.com/shlomifgm/HomeAssistant/blob/master/extras/github_resources/auto_backup.yaml
[useage-dashboard]: https://github.com/shlomifgm/HomeAssistant/blob/master/extras/consumption
[student-techlife]: https://github.com/shlomifgm/HomeAssistant
