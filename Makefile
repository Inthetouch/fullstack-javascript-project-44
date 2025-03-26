# Установка зависимости npm ci
install:
	npm ci

# Запуск brain-games
brain-games:
	node bin/brain-games.js

# Запуск brain-calc
brain-calc:
	node bin/brain-calc.js

# Запуск brain-gcd
brain-gcd:
	node bin/brain-gcd.js

# Запуск brain-prime
brain-prime:
	node bin/brain-prime.js

# Запуск brain-even
brain-even:
	node bin/brain-even.js

# Запуск brain-progression
brain-progression:
	node bin/brain-progression.js

# Запуск команды publish
publish:
	npm publish --dry-run

# Запуск линтера
make lint:
	npx eslint .