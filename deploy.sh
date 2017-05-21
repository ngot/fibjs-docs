#!/bin/sh

DIR=$(dirname "$0")

if [[ $(git status -s) ]]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

echo "Deleting old publication"
rm -rf public
mkdir public

echo "Updating gh-pages branch"
git clone .git --branch gh-pages public
ngot

echo "Generating site"
hugo

cd public
git add .
git commit -m "Publishing to gh-pages"
git push origin gh-pages
