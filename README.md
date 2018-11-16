# albums
Curso de React-Native


#troubleshooting
- quando der erro de "ENOSPC" ao executar "react-native start"
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p