import { expect, it } from "vitest";
import List from "../src/List";

/**
 * @vitest-environment jsdom
 */

it("Test factory list item element", () => {
    const tugas = "Daftar tugas";
    const el = List({text: tugas, id: 1, check: false });

    // Test list text
    expect(el.querySelector("span").innerHTML).toBe(tugas);

    // Test element checkbox
    expect(el.querySelector("input").checked).toBe(false);
});