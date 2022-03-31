################################################################################
# Automatically-generated file. Do not edit!
################################################################################

SHELL = cmd.exe

CG_TOOL_ROOT := C:/ti/ccs1110/ccs/tools/compiler/ti-cgt-arm_20.2.5.LTS

GEN_OPTS__FLAG := --cmd_file="C:/Users/BAMAROOF/workspace_v11/tirtos_builds_cc32xx_release_ccs/Debug/configPkg/compiler.opt" 
GEN_CMDS__FLAG := -l"C:/Users/BAMAROOF/workspace_v11/tirtos_builds_cc32xx_release_ccs/Debug/configPkg/linker.cmd" 

ORDERED_OBJS += \
"./syscfg/ti_drivers_config.obj" \
"./syscfg/ti_net_config.obj" \
"./syscfg/ti_drivers_net_wifi_config.obj" \
"./httppost.obj" \
"./main_tirtos.obj" \
"./platform.obj" \
"../cc32xxsf_tirtos.cmd" \
-lti_utils_build_linker.cmd.genlibs \
$(GEN_CMDS__FLAG) \
-l"ti/devices/cc32xx/driverlib/ccs/Release/driverlib.a" \
-llibc.a \

-include ../makefile.init

RM := DEL /F
RMDIR := RMDIR /S/Q

# All of the sources participating in the build are defined here
-include sources.mk
-include subdir_vars.mk
-include subdir_rules.mk
-include objects.mk

ifneq ($(MAKECMDGOALS),clean)
ifneq ($(strip $(C55_DEPS)),)
-include $(C55_DEPS)
endif
ifneq ($(strip $(C_UPPER_DEPS)),)
-include $(C_UPPER_DEPS)
endif
ifneq ($(strip $(S67_DEPS)),)
-include $(S67_DEPS)
endif
ifneq ($(strip $(S62_DEPS)),)
-include $(S62_DEPS)
endif
ifneq ($(strip $(S_DEPS)),)
-include $(S_DEPS)
endif
ifneq ($(strip $(OPT_DEPS)),)
-include $(OPT_DEPS)
endif
ifneq ($(strip $(C??_DEPS)),)
-include $(C??_DEPS)
endif
ifneq ($(strip $(ASM_UPPER_DEPS)),)
-include $(ASM_UPPER_DEPS)
endif
ifneq ($(strip $(S??_DEPS)),)
-include $(S??_DEPS)
endif
ifneq ($(strip $(C64_DEPS)),)
-include $(C64_DEPS)
endif
ifneq ($(strip $(CXX_DEPS)),)
-include $(CXX_DEPS)
endif
ifneq ($(strip $(S64_DEPS)),)
-include $(S64_DEPS)
endif
ifneq ($(strip $(INO_DEPS)),)
-include $(INO_DEPS)
endif
ifneq ($(strip $(CLA_DEPS)),)
-include $(CLA_DEPS)
endif
ifneq ($(strip $(S55_DEPS)),)
-include $(S55_DEPS)
endif
ifneq ($(strip $(SV7A_DEPS)),)
-include $(SV7A_DEPS)
endif
ifneq ($(strip $(C62_DEPS)),)
-include $(C62_DEPS)
endif
ifneq ($(strip $(C67_DEPS)),)
-include $(C67_DEPS)
endif
ifneq ($(strip $(PDE_DEPS)),)
-include $(PDE_DEPS)
endif
ifneq ($(strip $(K_DEPS)),)
-include $(K_DEPS)
endif
ifneq ($(strip $(C_DEPS)),)
-include $(C_DEPS)
endif
ifneq ($(strip $(CC_DEPS)),)
-include $(CC_DEPS)
endif
ifneq ($(strip $(C++_DEPS)),)
-include $(C++_DEPS)
endif
ifneq ($(strip $(C43_DEPS)),)
-include $(C43_DEPS)
endif
ifneq ($(strip $(S43_DEPS)),)
-include $(S43_DEPS)
endif
ifneq ($(strip $(ASM_DEPS)),)
-include $(ASM_DEPS)
endif
ifneq ($(strip $(S_UPPER_DEPS)),)
-include $(S_UPPER_DEPS)
endif
ifneq ($(strip $(CPP_DEPS)),)
-include $(CPP_DEPS)
endif
ifneq ($(strip $(SA_DEPS)),)
-include $(SA_DEPS)
endif
endif

-include ../makefile.defs

# Add inputs and outputs from these tool invocations to the build variables 
EXE_OUTPUTS += \
httpget_CC3220SF_LAUNCHXL_tirtos_ccs.out \

EXE_OUTPUTS__QUOTED += \
"httpget_CC3220SF_LAUNCHXL_tirtos_ccs.out" \

BIN_OUTPUTS += \
httpget_CC3220SF_LAUNCHXL_tirtos_ccs.hex \

BIN_OUTPUTS__QUOTED += \
"httpget_CC3220SF_LAUNCHXL_tirtos_ccs.hex" \

CUSTOM_TOOL_OUTPUTS_394976935 += \
httpget_CC3220SF_LAUNCHXL_tirtos_ccs.bin \

CUSTOM_TOOL_OUTPUTS_394976935__QUOTED += \
"httpget_CC3220SF_LAUNCHXL_tirtos_ccs.bin" \

CUSTOM_TOOL_OUTPUTS_999630064 += \
syscfg/httpget_CC3220SF_LAUNCHXL_tirtos_ccs.sli \

CUSTOM_TOOL_OUTPUTS_999630064__QUOTED += \
"syscfg\httpget_CC3220SF_LAUNCHXL_tirtos_ccs.sli" \


# All Target
all: $(OBJS) $(CMD_SRCS) $(GEN_CMDS)
	@$(MAKE) --no-print-directory -Onone "httpget_CC3220SF_LAUNCHXL_tirtos_ccs.out" secondary-outputs

dependents:
	-cd C:/Users/BAMAROOF/workspace_v11/tirtos_builds_cc32xx_release_ccs/Debug && $(MAKE) all

# Tool invocations
httpget_CC3220SF_LAUNCHXL_tirtos_ccs.out: $(OBJS) $(CMD_SRCS) $(GEN_CMDS) C:/Users/BAMAROOF/workspace_v11/tirtos_builds_cc32xx_release_ccs/Debug/tirtos_builds_cc32xx_release_ccs.lib
	@echo 'Building target: "$@"'
	@echo 'Invoking: Arm Linker'
	"C:/ti/ccs1110/ccs/tools/compiler/ti-cgt-arm_20.2.5.LTS/bin/armcl" -mv7M4 --code_state=16 --float_support=vfplib -me --define=DeviceFamily_CC3220 -g --diag_warning=225 --diag_warning=255 --diag_wrap=off --display_error_number --gen_func_subsections=on -z -m"httpget_CC3220SF_LAUNCHXL_tirtos_ccs.map" -i"C:/ti/simplelink_cc32xx_sdk_5_30_00_08/source/ti/net/http/lib" -i"C:/ti/simplelink_cc32xx_sdk_5_30_00_08/source/ti/net/lib" -i"C:/ti/simplelink_cc32xx_sdk_5_30_00_08/source/ti/drivers/net/wifi/slnetif" -i"C:/ti/simplelink_cc32xx_sdk_5_30_00_08/source" -i"C:/ti/simplelink_cc32xx_sdk_5_30_00_08/source/ti/drivers/net/wifi" -i"C:/ti/simplelink_cc32xx_sdk_5_30_00_08/kernel/tirtos/packages" -i"C:/Users/BAMAROOF/workspace_v11/httpget_CC3220SF_LAUNCHXL_tirtos_ccs/MCU+Image/syscfg" -i"C:/ti/ccs1110/ccs/tools/compiler/ti-cgt-arm_20.2.5.LTS/lib" --diag_wrap=off --display_error_number --warn_sections --xml_link_info="httpget_CC3220SF_LAUNCHXL_tirtos_ccs_linkInfo.xml" --rom_model -o "httpget_CC3220SF_LAUNCHXL_tirtos_ccs.out" $(ORDERED_OBJS)
	@echo 'Finished building target: "$@"'
	@echo ' '

httpget_CC3220SF_LAUNCHXL_tirtos_ccs.hex: $(EXE_OUTPUTS)
	@echo 'Building secondary target: "$@"'
	@echo 'Invoking: Arm Hex Utility'
	"C:/ti/ccs1110/ccs/tools/compiler/ti-cgt-arm_20.2.5.LTS/bin/armhex" --diag_wrap=off -o "httpget_CC3220SF_LAUNCHXL_tirtos_ccs.hex" $(EXE_OUTPUTS__QUOTED)
	@echo 'Finished building secondary target: "$@"'
	@echo ' '

httpget_CC3220SF_LAUNCHXL_tirtos_ccs.bin: $(EXE_OUTPUTS) httpget_CC3220SF_LAUNCHXL_tirtos_ccs.out
	@echo 'Building secondary target: "$@"'
	@echo 'Invoking: Arm ObjCopy'
	"C:/ti/ccs1110/ccs/tools/compiler/ti-cgt-arm_20.2.5.LTS/bin/armobjcopy" -O binary --only-section .text --only-section .const --only-section .cinit --only-section .resetVecs "httpget_CC3220SF_LAUNCHXL_tirtos_ccs.out" "httpget_CC3220SF_LAUNCHXL_tirtos_ccs.bin"
	@echo 'Finished building secondary target: "$@"'
	@echo ' '

syscfg/httpget_CC3220SF_LAUNCHXL_tirtos_ccs.sli: $(EXE_OUTPUTS) httpget_CC3220SF_LAUNCHXL_tirtos_ccs.bin syscfg/ti_drivers_net_wifi_config.json
	@echo 'Building secondary target: "$@"'
	@echo 'Invoking: Image Creator'
	"C:/ti/simplelink_cc32xx_sdk_5_30_00_08/source/ti/drivers/net/imagecreator/bin/SLImageCreator.exe" syscfg create_image --sdk_path "C:/ti/simplelink_cc32xx_sdk_5_30_00_08" --json "C:/Users/BAMAROOF/workspace_v11/httpget_CC3220SF_LAUNCHXL_tirtos_ccs/MCU+Image/syscfg/ti_drivers_net_wifi_config.json" --file "C:/Users/BAMAROOF/workspace_v11/httpget_CC3220SF_LAUNCHXL_tirtos_ccs/MCU+Image/syscfg/httpget_CC3220SF_LAUNCHXL_tirtos_ccs.sli" --mcu "C:/Users/BAMAROOF/workspace_v11/httpget_CC3220SF_LAUNCHXL_tirtos_ccs/MCU+Image/httpget_CC3220SF_LAUNCHXL_tirtos_ccs.bin"
	@echo 'Finished building secondary target: "$@"'
	@echo ' '

# Other Targets
clean:
	-$(RM) $(GEN_MISC_FILES__QUOTED)$(BIN_OUTPUTS__QUOTED)$(GEN_FILES__QUOTED)$(CUSTOM_TOOL_OUTPUTS_394976935__QUOTED)$(EXE_OUTPUTS__QUOTED)$(CUSTOM_TOOL_OUTPUTS_999630064__QUOTED)
	-$(RM) "syscfg\ti_drivers_config.obj" "syscfg\ti_net_config.obj" "syscfg\ti_drivers_net_wifi_config.obj" "httppost.obj" "main_tirtos.obj" "platform.obj" 
	-$(RM) "syscfg\ti_drivers_config.d" "syscfg\ti_net_config.d" "syscfg\ti_drivers_net_wifi_config.d" "httppost.d" "main_tirtos.d" "platform.d" 
	-$(RMDIR) $(GEN_MISC_DIRS__QUOTED)
	-@echo 'Finished clean'
	-@echo ' '

secondary-outputs: $(CUSTOM_TOOL_OUTPUTS_394976935) $(CUSTOM_TOOL_OUTPUTS_999630064)

.PHONY: all clean dependents
.SECONDARY:
C:/Users/BAMAROOF/workspace_v11/tirtos_builds_cc32xx_release_ccs/Debug/tirtos_builds_cc32xx_release_ccs.lib:

-include ../makefile.targets

