import { message, danger, warn, fail } from 'danger';

const modifiedMD = danger.git.modified_files.join('- ');
message(`Changed Files in this PR: \n - ${modifiedMD}`);

// 判断是否包含package-lock.json 或者包含yarn-lock.json
if (
  danger.git.modified_files.includes('package-lock.json') ||
  danger.git.modified_files.includes('yarn-lock.json')
) {
  fail('不支持npm或者yarn安装依赖, 请使用pnpm');
}

// Warn (won’t fail the CI, just post a comment) if the PR has
// changes in package.json but no changes in pnpm-lock.yaml
const packageChanged = danger.git.modified_files.includes('package.json');
const lockfileChanged = danger.git.modified_files.includes('pnpm-lock.yaml');
if (packageChanged && !lockfileChanged) {
  warn(
    'Changes were made to package.json, but not to ' +
      'pnpm-lock.yaml.' +
      'Perhaps you need to run `pnpm install` and commit changes ' +
      'in pnmp-lock.yaml. Make sure you’re using pnpm 7+.'
  );
}

//
