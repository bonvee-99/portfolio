set -e

# 1. Build the project
echo "🏗  Building..."
npm run build

# 2. Add CNAME to dist if needed
cp CNAME dist/CNAME

# 3. Create an orphan branch and push the dist folder as root
echo "🚀 Deploying to gh-pages..."
git checkout --orphan gh-pages
git --work-tree=dist add --all
git --work-tree=dist commit -m "gh-pages"
git push origin HEAD:gh-pages --force

# 4. Cleanup
git checkout main
git branch -D gh-pages
rm -rf dist

echo "✅ Successfully deployed!"
