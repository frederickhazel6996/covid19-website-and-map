import { action, observable, computed } from "mobx";

class generalStore {
    @observable general = [];

    @action addgeneral = (general) => {
        this.general.push(general);
    };

    @computed get generalSize() {
        return this.general.length;
    }
    @action deleteGeneral = (delete_general) => {
        const newGeneral = this.general.filter((general) => general !== delete_general);
        this.general = newgeneral;
    };
    @observable error = "";
    @action cleargeneral = () => {
        this.general = [];
    };
    @action setError = (new_error) => {
        this.error = new_error;
    };
}

const store = (window.store = new generalStore());
export default store;
