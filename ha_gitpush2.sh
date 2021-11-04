# Go to /config folder or 
# Change this to your Home Assistant config folder if it is different
###cd /usr/share/hassio/homeassistant
#cd /config

#git config core.sshCommand "ssh -i /usr/share/hassio/homeassistant/.ssh/id_rsa -F /dev/null"
#git config core.sshCommand "ssh -i /config/.ssh/id_rsa -F /dev/null"



# Add all files to the repository with respect to .gitignore rules
git add .

# Commit changes with message with current date stamp
git commit -m "config files on %date% %time%"

# Push changes towards GitHub
git push -u origin master

## Delete Cache From Gitignore
#git rm -r --cached .
#git add .
#git commit -m “.gitignore is now working”

## Force Push
#git push -f origin master