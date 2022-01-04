---
title: Setting up RIT gmail with Office Outlook (Version 2005+)
date: "2021-12-30T20:03:00.121Z"
---

Made a small guide for setting up Outlook for Office (or Microsoft 365) a while ago. Might be useful for some people that currently uses the desktop application for their emails since the rit confluence wiki seems to be outdated and I was having a bit of trouble trying to get some help from ITS

### Setting GApps password & IMAP
- Go to https://start.rit.edu
  - Click on Google Preferences
  - Set and save google apps password
- Go to Gmail
  - Go to Quick Settings (cog icon) > See all settings
  - Go to Forwarding and POP/IMAP
  - Enable IMAP and Save Changes

------

### Office Outlook
- Open Outlook and go to File > Add Account
  - Login using your ritusername@rit.edu (@g.rit.edu domain name is not necessary)
  - Connect and Setup with IMAP


- IMAP Account Settings
  - Incoming mail: imap.gmail.com
    - Port: 993
    - Encryption method: SSL/TLS
  - Outgoing mail: smtp.gmail.com
    - Port: 465
    - Encryption method: SSL/TLS

- Use your google apps password from start.rit.edu
- RIT login will pop up, use regular credentials (may need to log in for the second time)
- Allow access from Microsoft apps & services if prompted