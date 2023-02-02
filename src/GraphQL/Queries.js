import {gql} from '@apollo/client'


export const LOAD_CLASSES = gql`
    query {
        class {
            Count
            Next
            Previous
            Classes {
            Name
            Slug
            Desc
            HitDice
            HpAt1StLevel
            HpAtHigherLevels
            ProfArmor
            ProfWeapons
            ProfTools
            ProfSavingThrows
            ProfSkills
            Equipment
            Table
            SpellcastingAbility
            SubtypesName
            Spells {
                Slug
                Name
                Desc
                HigherLevel
                Page
                Range
                Components
                Material
                Ritual
                Duration
                Concentration
                CastingTime
                Level
                LevelInt
                School
                DndClass
                Archetype
                Circles
            }
            Archetypes {
                Name
                Slug
                Desc
                DocumentSlug
                DocumentTitle
                DocumentLicenseURL
            }
            DocumentSlug
            DocumentTitle
            DocumentLicenseURL
            }
        }
    }
`