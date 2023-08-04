import List "mo:base/List";
import Debug "mo:base/Debug";

actor dKeeper{
  type Note= {
    title: Text;
    content: Text;
  };
 stable var notes: List.List<Note> = List.nil<Note>();

  public func createNote(titleText: Text, contentText: Text){
    let newNote = {
      title = titleText;
      content = contentText;
    };
    notes := List.push(newNote,notes);
    // Debug.print(debug_show(notes));
  };
  public query func readNote(): async [Note]{
    return List.toArray(notes);
  };
  public func removeNote(id: Nat){
    let  left = List.take(notes,id);
    let right = List.drop(notes,id+1);
    notes := List.append(left,right);
    // Debug.print(debug_show(notes));
  }
}
