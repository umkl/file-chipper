import fs from "fs";
import { getAllFiles, getAllFilesSync } from "get-all-files";

export async function file_chip_main(to_remove) {
	console.log("gonna remove: " + to_remove);
	const currentDir = process.cwd();
	for await (const filename of getAllFiles(currentDir)) {
		const oldpath = filename;
		const newpath = oldpath.replace(to_remove, "");
		console.log(newpath);
		fs.rename(oldpath, newpath, (err) => {
			if (err) {
				console.error("Error renaming file:", err);
			}
		});
	}
}
