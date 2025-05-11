# Makefile

# Define the default target
.DEFAULT_GOAL := help

# Define the npm command
NPM := GIT_USER_NAME="Saverio Ferrara" GIT_USER_EMAIL=fsferrara@users.noreply.github.com GITHUB_HOST=github.com-fsferrara npm

# Define the scripts to run
SCRIPTS := clear start build deploy

# Define the targets
.PHONY: $(SCRIPTS) help

# Define the help target
help:
	@echo "Script are defined in the package.json file"

# Define the targets to run the npm scripts
$(SCRIPTS):
	$(NPM) run $@
