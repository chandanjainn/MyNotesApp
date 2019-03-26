// const yargs = require('yargs');
const readline = require('readline');
const chalk = require('chalk');

const notes = require('./notes');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question(
	`Select one:
1.Add a note
2.Delete a note
3.List all notes
4.Get a note by title\n`,
	userInput => {
		switch (userInput) {
			case '1':
				rl.question('Enter title of the note:- ', noteTitle => {
					rl.question(`Enter the note:- `, noteBody => {
						notes.addNotes(noteTitle, noteBody);
						rl.close();
					});
				});

				break;
			case '2':
				rl.question('Enter title of the note to be deleted:- ', noteTitle => {
					notes.deleteNote(noteTitle);
					rl.close();
				});
				break;
			case '3':
				notes.listNotes();
				rl.close();
				break;
			case '4':
				rl.question('Enter title of the note:- ', noteTitle => {
					notes.getNotes(noteTitle);
					rl.close();
				});
				break;
			default:
				console.log(chalk.red.inverse('Invalid Input'));
				break;
		}
	}
);

// yargs.command({
// 	command: 'add',
// 	description: 'Add a note',
// 	builder: {
// 		title: {
// 			description: 'Note Title',
// 			demandOption: true,
// 			type: 'string'
// 		},
// 		body: {
// 			description: 'Note Body',
// 			demandOption: true,
// 			type: 'string'
// 		}
// 	},
// 	handler(argv) {
// 		notes.addNotes(argv.title, argv.body);
// 	}
// });

// yargs.command({
// 	command: 'delete',
// 	description: 'Deleting a note',
// 	builder: {
// 		title: {
// 			description: 'Note Title',
// 			demandOption: true,
// 			type: 'string'
// 		}
// 	},
// 	handler: argv => notes.deleteNote(argv.title, argv.body)
// });

// yargs.command({
// 	command: 'read',
// 	builder: {
// 		title: {
// 			description: 'Note Title',
// 			demandOption: true,
// 			type: 'string'
// 		}
// 	},
// 	handler: argv => notes.getNotes(argv.title)
// });

// yargs.command({
// 	command: 'list',
// 	description: 'List all notes',
// 	handler: () => notes.listNotes()
// });

// yargs.parse();
// console.log(yargs.argv);
