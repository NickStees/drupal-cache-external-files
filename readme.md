Forked from https://www.drupal.org/project/cache_external_files

**This module is a custom fork and is not publicly supported, use at own risk**

Reasons for fork
- Module was not compatible with caching instagram json url since it was /user/media it would create a file named media with no extension so the webserver would not serve it. The module needs to be forked to allow renaming of files that are cached. 
- Added some JS to help suggest file paths
- Adjusted the time so it can be synced more often
