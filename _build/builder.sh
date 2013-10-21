#Remove the cdn folder, and build a new one
echo "Quick Clean Up"
rm -rf ../_cdn
mkdir ../_cdn
#mkdir ../_cdn/src
#mkdir ../_cdn/bower_components
#mkdir ../_cdn/bower_components/requirejs


#Minify the project
echo "Minifying"
node ../bower_components/require-handlebars-plugin/r.js -o app.build.js

#Move && || zip
echo "Move Everything to its right place"
cp ../index.html ../_cdn/index.html
cp .htaccess ../_cdn/.htaccess
gzip -9 -c ../bower_components/requirejs/require.js > ../_cdn/require.js
gzip -9 -c ../app_build/main.js > ../_cdn/main.js

#Change References to flat directory structure
find ../_cdn/index.html -type f -exec sed -i 's/\.\/bower_components\/requirejs\/require.js/require.js/g' {} \;
find ../_cdn/index.html -type f -exec sed -i 's/\.\/src\/main.js/main.js/g' {} \;


echo "Final Compression"
#copy index to test
cp ../_cdn/index.html ../_cdn/test.html
#zip test to index
gzip -9 -c ../_cdn/test.html > ../_cdn/index.html
#remove test
rm ../_cdn/test.html
#remove the build dir
rm -rf ../app_build

echo "DONE"
