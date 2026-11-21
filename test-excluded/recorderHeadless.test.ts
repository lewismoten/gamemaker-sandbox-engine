import { expect, it } from 'vitest';

it("Linear Volume's own demo plays past its drop screen (it once waited for Enter forever)", async () => {
  const { loadCdGame, runHeadless } = await import('../../games/kit/cdDemos/headless');
  let ticks = 0;
  await runHeadless(loadCdGame('gameware', 'volume'), 'volume.gam', {
    maxTicks: 160,
    onTick: () => void ticks++,
  });
  expect(ticks).toBeGreaterThanOrEqual(160);
}, 60000);
