#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const execa = require('execa');
const inquirer = require('inquirer');
const validateName = require('validate-npm-package-name');
const chalk = require('chalk').default;

const TEMPLATE_REPO = 'https://github.com/kooljay82/react-boiler-plate.git';

(async () => {
  try {
    console.log(chalk.green('\n👨‍🍳 리액트 요리 시작! / react-cook'));

    const args = process.argv.slice(2);
    let finalProjectName = args[0];

    if (!finalProjectName) {
      const prompt = inquirer.createPromptModule();
      const { projectName } = await prompt([
        {
          name: 'projectName',
          message: '프로젝트 이름을 입력해주세요:',
          validate: input => {
            const valid = validateName(input);
            return valid.validForNewPackages || '올바르지 않은 npm 패키지 이름입니다!';
          }
        }
      ]);
      finalProjectName = projectName;
    }

    if (!finalProjectName) {
      console.error(chalk.red("❌ 프로젝트 이름이 필요합니다."));
      process.exit(1);
    }

    const projectPath = path.join(process.cwd(), finalProjectName);

    if (fs.existsSync(projectPath)) {
      throw new Error(`'${finalProjectName}' 디렉토리가 이미 존재합니다.`);
    }

    console.log(chalk.blueBright(`\n🥄 "${finalProjectName}" 템플릿을 요리중...`));

    await execa('git', ['clone', TEMPLATE_REPO, projectPath], { stdio: 'inherit' });
    await fs.remove(path.join(projectPath, '.git'));

    const pkgPath = path.join(projectPath, 'package.json');
    const pkg = await fs.readJson(pkgPath);
    pkg.name = finalProjectName;
    pkg.version = '1.0.0';
    pkg.bin = {
      [finalProjectName]: './bin/index.js'
    };
    await fs.writeJson(pkgPath, pkg, { spaces: 2 });

    console.log(chalk.green(`\n🍽️ ${finalProjectName} 준비 완료!`));
    console.log(`\n 다음 명령어를 실행하세요:\n`);
    console.log(`  cd ${finalProjectName}`);
    console.log(`  npm install`);
    console.log(`  npm start\n`);
  } catch (error) {
    console.error(chalk.red('\n❌ 에러가 발생했습니다:'), error.message);
    process.exit(1);
  }
})();
