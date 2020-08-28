---
title: "How to Create a Minecraft Server"
date: "Oct '19"
---

The following tutorial uses the Spigot version of Minecraft and running on Linux. Minecraft: Java Edition can run on all operating systems. So, we are going to be installing Java JDK and optimizing the server for better performance.

## Seting up the Minecraft Server

### Updating the system

Regardless of where you install the server, it is highly recommended to update all system packages to the lastest/stable version. To update and upgrade in Linux, type:

``` shell
sudo apt-get update &&
sudo apt-get dist-upgrade -Vy &&
sudo apt-get autoremove -y &&
sudo apt-get autoclean &&
sudo apt-get clean 
```

Now go to finish and reboot for the new updates to apply.

### Installing the server and its dependecies
Minecraft: Java Edition works with `Java JDK` in the backend, so let’s install a copy of the default JDK package. Or, the licensed Java-edition from Oracle.

Enter the following command to install the stable version of Java:
``` shell
sudo apt install default-jdk
```

You can verify whether Java was installed by typing: `java --version`.

Now that Java is successfully installed, we can go ahead and fetch the Minecraft server file from Spigot and its builder tools by typing the command:

``` shell
# Creates a folder in the root directory.
mkdir ./minecraft
# Navigates to the folder created.
cd ./minecraft
# Pulls the lastest files from Spigot required to build the server.
wget https://hub.spigotmc.org/jenkins/job/BuildTools/lastSuccessfulBuild/artifact/target/BuildTools.jar
```

## Building the Serer

Now we want to run the build tools file, so it creates our Spigot server. It takes about 15-30 minutes to finish. Grab a coffee and relax!
Add `--rev [versionNumber]` to the end of the command to get the latest version. If the version number is not specified, it installs the latest copy available.
`java -jar BuildTools.jar`
To make sure the Spigot server successfully downloaded and saved type ls and should see `spigot-1.14.4.jar`.

```` shell
ls
```

For the commands to work, it is required to stay in the same directory as the configuration files.

## Launch the Server!
We are ready to launch the server, to do so, enter the following command:

``` shell
# '-Xms' provides the minimum RAM the server can use
# '-Xmx' provides the maximum RAM the server can use
java -Xms512M -Xmx1008M -jar /home/pi/minecraft/spigot-1.14.4.jar nogui
```

Feel free to change the `-Xms` & `-Xmx` parameters in the command depending on how powerful your computer is.

The server stops straight away as we need to agree to the EULA. You can do this by changing `false` to `TRUE`.

Now relaunch the server with the commands used before. It takes several minutes to create a map. Afterward, when using, it only takes 30 seconds to reload the existing map.

The server should now be running and accessible over the local network.

## Connecting

Connect to the server with the local network of the computer that the server is running on.
To find the local IP address, type:

``` shell
sudo hostname -I
```

The output is the address used to connect to in Minecraft Multiplayer Mode. You might want to give privileged access to your Minecraft username, so its easier to send commands to the server from the game.
To mod your user, simply run the following command when the server has launched.

``` shell
op yourUsername
```

## Congratulations!
The Minecraft server should be up and running! However, you can also add plugins, mods, and optimizers.
