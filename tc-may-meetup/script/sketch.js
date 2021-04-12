let table;

function preload() {
  table = loadTable('assets/lineup-data.csv', 'csv', 'header');
}

function setup() {
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columes in table');

  let speaker_a = select('#name_a');
  let topic_a = select('#topic_a');

  let speaker_b = select('#name_b');
  let topic_b = select('#topic_b');

  let speaker_c = select('#name_c');
  let topic_c = select('#topic_c');

  speaker_a.html(table.getString(0, 0));
  topic_a.html(table.getString(0, 1));

  speaker_b.html(table.getString(1, 0));
  topic_b.html(table.getString(1, 1));

  speaker_c.html(table.getString(2, 0));
  topic_c.html(table.getString(2, 1));

}