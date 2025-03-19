# Установка зависимости npm ci
install:
	npm ci

# Запуск brain-games
make brain-games:
	node bin/brain-games.js

# Запуск команды publish
publish:
	npm publish --dry-run