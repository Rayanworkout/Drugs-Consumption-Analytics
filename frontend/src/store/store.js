import {create} from 'zustand';
import translations from "@/assets/lang/translations.js";
import {
    GET_REPARTITION_DATA,
    GET_CONSUMPTION_DATA,
    GET_CORRELATION_DATA,
    GET_CORRELATION_MEANING_DATA
} from "@/api_/api_.js";

const useStore = create((set, get) => ({
    language: 'fr',
    translations: translations['fr'],
    setLanguage: (language) => {
        set({
            language: language,
            translations: translations[language],
        });
    },

    screenSize: 0,
    setScreenSize: (screenSize) => set({ screenSize }),
    chartType: 'consumption',
    setChartType: (chartType) => set({ chartType }),

    drugData : [
        {drug: 'Alcohol', value: 'alcohol'},
        {drug: 'Amphetamine', value: 'amphet'},
        {drug: 'Amyl', value: 'amyl'},
        {drug: 'Benzos', value: 'benzos'},
        {drug: 'Cafféine', value: 'caff'},
        {drug: 'Cannabis', value: 'cannabis'},
        {drug: 'Chocolate', value: 'choc'},
        {drug: 'Cockaine', value: 'coke'},
        {drug: 'Crack', value: 'crack'},
        {drug: 'Ecstasy', value: 'ecstasy'},
        {drug: 'Heroin', value: 'heroin'},
        {drug: 'Ketamin', value: 'ketamine'},
        {drug: 'Leghal', value: 'legalh'},
        {drug: 'LSD', value: 'lsd'},
        {drug: 'Methamphetamine', value: 'meth'},
        {drug: 'Mushrooms', value: 'mushrooms'},
        {drug: 'Nicotine', value: 'nicotine'},
        {drug: 'Semer', value: 'semer'},
        {drug: 'VSA', value: 'vsa'},
    ],

    drugType: 'alcohol',
    setDrugType: (drugType) => {
        const currentApiParam = get().apiParam;
        set({
            drugType,
            apiParam: { ...currentApiParam, drug: drugType }
        });
    },

    drugTypePrettier: 'Alcohol',
    setDrugTypePrettier: (drugTypePrettier) => set({ drugTypePrettier }),

    consumptionType: 'by_age',
    setConsumptionType: (consumptionType) => set({ consumptionType }),

    consumptionOrientationChart: false,
    setConsumptionOrientationChart: (consumptionOrientationChart) => set({ consumptionOrientationChart }),

    precisionConsumption: '18-24',
    setPrecisionConsumption: (precisionConsumption) => set({ precisionConsumption }),

    apiParam: { age_range: '18-24', drug: 'alcohol' },
    setApiParam: (apiParam) => set({ apiParam }),

    apiData: { data: {} },
    setApiData: (apiData) => set({ apiData }),

    apiRepartitionData: { data: [] },
    setApiRepartitionData: (apiRepartitionData) => set({ apiRepartitionData }),

    apiCorrelationData: {},
    setApiCorrelationData: (apiCorrelationData) => set({ apiCorrelationData }),

    selectedCategories: [], // Catégories sélectionnées
    selectedValues: {}, // Valeurs sélectionnées pour chaque catégorie

    // Met à jour les catégories sélectionnées
    setSelectedCategories: (categories) => {
        set({ selectedCategories: categories });
    },

    // Met à jour les valeurs sélectionnées pour une catégorie donnée
    setSelectedValues: (category, values) => {
        set((state) => ({
            selectedValues: {
                ...state.selectedValues,
                [category]: values
            }
        }));
    },

    // Fonction pour effectuer l'appel API en fonction des sélections
    getFunctionToCall: () => {
        const { chartType, apiParam, selectedCategories, selectedValues, setApiData, setApiRepartitionData, setApiCorrelationData } = get();
        switch (chartType) {
            case 'consumption':
                return () => {
                    const queryString = new URLSearchParams(apiParam).toString();
                    const consumptionType = selectedCategories[0];
                    GET_CONSUMPTION_DATA(queryString, consumptionType)
                        .then(data => setApiData(data))
                        .catch(error => console.error('Failed to fetch data:', error));
                };
            case 'repartition':
                return () => {
                    const consumptionRepartition = selectedCategories.join('_');
                    const queryString = new URLSearchParams(apiParam).toString();
                    GET_REPARTITION_DATA(consumptionRepartition, queryString)
                        .then(data => setApiRepartitionData(data))
                        .catch(error => console.error('Failed to fetch data:', error));
                };
            case 'correlation':
                switch (selectedCategories.join('_')) {
                    case 'drug_and_personality':
                        return () => {
                            GET_CORRELATION_DATA()
                                .then(data => setApiCorrelationData(data))
                                .catch(error => console.error('Failed to fetch data:', error));
                        };
                    case 'feature_to_drug_mean':
                        return () => {
                            GET_CORRELATION_MEANING_DATA()
                                .then(data => setApiCorrelationData(data))
                                .catch(error => console.error('Failed to fetch data:', error));
                        };
                }
            case 'other':
                return () => console.log("'other' type case");
            default:
                return () => console.log("Default case");
        }
    }
}));

export default useStore;
