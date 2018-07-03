Syncthing
Geräteidentifikation - frontUp
5ID3FD2-GYOOOGE-W27SC7H-5O3GBMV-A6JAVH5-YKVG2CX-7J3LQVQ-ZA65SQR

# Add the release PGP keys:
curl -s https://syncthing.net/release-key.txt | sudo apt-key add -

# Add the "stable" channel to your APT sources:
echo "deb https://apt.syncthing.net/ syncthing stable" | sudo tee /etc/apt/sources.list.d/syncthing.list

# Update and install syncthing:
sudo apt-get update
sudo apt-get install syncthing

tuxmath
tuxtype
vlc
grub-imageboot
grub-invaders
multiboot
multiboot-doc
git
git-doc

Atom 1.28.0
https://atom.io/
atom-amd64.deb 82.5 MB


nodejs
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

