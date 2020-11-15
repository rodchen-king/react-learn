###
 # @Description: 
 # @Author: rodchen
 # @Date: 2020-11-16 00:12:54
 # @LastEditTime: 2020-11-16 00:13:57
 # @LastEditors: rodchen
### 
cd build
git init
git checkout --orphan gh-pages
git add .
git commit -m "init project"
git remote add origin git@github.com:rodchen-king/react-learn.git
git push origin gh-pages