import {defineBlocksWithDt} from "../../register";

defineBlocksWithDt(`

prefix: layers
style: module_blocks
help: https://pytorch.org/docs/stable/generated/

linear: Module
线性连接层   IO{num}{num} 偏差(checkbox)
help: torch.nn.Linear.html#torch.nn.Linear
tip: 创建线性连接层，此处输入输出为输入输出的维度大小。
Python
import: from torch import nn
nn.Linear($A0, $A1, bias=$A2)

`, true);
