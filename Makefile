APP_VERSION=$(shell echo `node -pe 'require("./package.json").version'`)
NODE_VERSION=$(shell echo `node -v`)
RUNNER=$(shell whoami)

N=[0m
R=[00;31m
G=[01;32m
Y=[01;33m
B=[01;34m
L=[01;30m

comandos: welcome
	@echo "${B} COMANDOS DISPONIBLES"
	@echo ""
	@echo "    ${G}iniciar${N}                    Instalar dependencias"
	@echo "    ${G}ejecutar${N}"
	@echo "    ${G}compilar${N}"
	@echo "    ${G}actualizar_backend${N}"
	@echo ""

welcome:
	@echo ":: ${Y}Node@${NODE_VERSION} REQUIRED V10 ${N}"
	@echo ":: ${Y}timesheet@${APP_VERSION}${N} as ${RUNNER}"
	@echo ""

iniciar:
	@npm install

ejecutar:
	@ng serve

compilar:
	@ng build --prod --output-hashing none

actualizar_backend:
	@cp -fr dist/mis-cuentas-front/* ~/Workspace/Python/timesheet/static/dist
