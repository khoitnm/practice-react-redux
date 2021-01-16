# chmod +x fastclean_target.sh
# ./fastclean_target.sh

# cd node_modules
# perl -e 'for(<*>){((stat)[9]<(unlink))}'

# Or
mkdir empty_dir
rsync -a --delete empty_dir/ ./node_modules/
rm -rf ./empty_dir
rm -rf ./node_modules

