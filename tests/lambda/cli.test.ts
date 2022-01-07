import {
  CURRENT_VERSION,
  DEFAULT_MEMORY_SIZE,
  DEFAULT_TIMEOUT,
} from "@remotion/lambda/dist/defaults";
import { CliInternals } from "../../packages/lambda/node_modules/@remotion/cli/dist";
import { parsedLambdaCli } from "../../packages/lambda/src/cli/args";
import { LambdaInternals } from "../../packages/lambda/src/index";
import { getProcessStdErrOutput, getProcessWriteOutput } from "./console-hooks";

test("Deploy function", async () => {
  await LambdaInternals.executeCommand(["functions", "deploy"]);
  expect(getProcessWriteOutput()).toContain(
    `Deployed as remotion-render-${CURRENT_VERSION}-${DEFAULT_MEMORY_SIZE}mb-${DEFAULT_TIMEOUT}sec\n`
  );
});

test("Deploy function and list it", async () => {
  await LambdaInternals.executeCommand(["functions", "deploy"]);
  await LambdaInternals.executeCommand(["functions", "ls"]);
  expect(getProcessWriteOutput()).toContain("Getting functions...");
  expect(getProcessWriteOutput()).toContain("Memory (MB)");
  expect(getProcessWriteOutput()).toMatch(/remotion-render-(.*)\s+2048\s+120/g);
});

test("Deploy function and it already exists should fail", async () => {
  await LambdaInternals.executeCommand(["functions", "deploy"]);
  await LambdaInternals.executeCommand(["functions", "deploy"]);

  expect(getProcessWriteOutput()).toMatch(/Already exists as remotion-render/);
});

test('If no functions are there and is quiet, should return "()"', async () => {
  CliInternals.parsedCli.q = true;
  await LambdaInternals.executeCommand(["functions", "ls"]);
  expect(getProcessWriteOutput()).toBe("()");
});

test("Should handle functions rm called with no functions", async () => {
  await LambdaInternals.executeCommand(["functions", "rm", "()"]);
  expect(getProcessWriteOutput()).toBe("No functions to remove.");
});